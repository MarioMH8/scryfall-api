import { describe, expect, it } from 'bun:test';

import { createFetcher } from '../src/fetcher/fetcher';
import MagicPageResult from '../src/fetcher/page.result';

interface Clock {
	now: () => number;
	sleep: (milliseconds: number) => Promise<void>;
	sleeps: number[];
}

function createClock(): Clock {
	let currentTime = 0;
	const sleeps: number[] = [];

	return {
		now: () => currentTime,
		sleep: (milliseconds: number) => {
			sleeps.push(milliseconds);
			currentTime += milliseconds;

			return Promise.resolve();
		},
		sleeps,
	};
}

function toUrl(input: RequestInfo | URL): string {
	if (typeof input === 'string') {
		return input;
	}
	if (input instanceof URL) {
		return input.href;
	}

	return input.url;
}

function createFetchStub(responses: unknown[]) {
	const calls: string[] = [];
	const fetchStub = ((input: RequestInfo | URL) => {
		calls.push(toUrl(input));
		const response = responses[calls.length - 1] ?? responses.at(-1) ?? {};

		return Promise.resolve(
			Response.json(response, {
				headers: { 'content-type': 'application/json' },
				status: 200,
			})
		);
	}) as typeof fetch;

	return { calls, fetchStub };
}

describe('fetcher rate limiting', () => {
	it('spaces requests by the configured rate', async () => {
		const clock = createClock();
		const { calls, fetchStub } = createFetchStub([{}]);
		const fetcher = createFetcher({
			fetch: fetchStub,
			maxRequestsPerSecond: 2,
			now: clock.now,
			sleep: clock.sleep,
		});

		await fetcher('cards/search');
		await fetcher('cards/search');
		await fetcher('cards/search');

		expect(calls).toHaveLength(3);
		expect(clock.sleeps).toEqual([500, 500]);
	});

	it('defaults to ten requests per second', async () => {
		const clock = createClock();
		const { fetchStub } = createFetchStub([{}]);
		const fetcher = createFetcher({ fetch: fetchStub, now: clock.now, sleep: clock.sleep });

		await fetcher('cards/1');
		await fetcher('cards/2');

		expect(clock.sleeps).toEqual([100]);
	});

	it('never exceeds the global limit, even for endpoints with a looser limit', async () => {
		const clock = createClock();
		const { fetchStub } = createFetchStub([{}]);
		const fetcher = createFetcher({
			fetch: fetchStub,
			maxRequestsPerSecond: 20,
			now: clock.now,
			sleep: clock.sleep,
		});

		await fetcher('cards/1');
		await fetcher('cards/2');

		expect(clock.sleeps.reduce((total, milliseconds) => total + milliseconds, 0)).toBe(100);
	});

	it('keeps an independent budget per fetcher', async () => {
		const clock = createClock();
		const { fetchStub } = createFetchStub([{}]);
		const search = createFetcher({
			fetch: fetchStub,
			maxRequestsPerSecond: 2,
			now: clock.now,
			sleep: clock.sleep,
		});
		const named = createFetcher({
			fetch: fetchStub,
			maxRequestsPerSecond: 2,
			now: clock.now,
			sleep: clock.sleep,
		});

		await Promise.all([search('cards/search'), named('cards/named')]);

		expect(clock.sleeps).toEqual([]);
	});

	it('serializes concurrent requests on the same fetcher', async () => {
		const clock = createClock();
		const { fetchStub } = createFetchStub([{}]);
		const fetcher = createFetcher({
			fetch: fetchStub,
			maxRequestsPerSecond: 2,
			now: clock.now,
			sleep: clock.sleep,
		});

		await Promise.all([fetcher('cards/search'), fetcher('cards/named')]);

		expect(clock.sleeps).toEqual([500]);
	});

	it('parses the response body', async () => {
		const clock = createClock();
		const { fetchStub } = createFetchStub([{ data: [], object: 'list' }]);
		const fetcher = createFetcher({ fetch: fetchStub, now: clock.now, sleep: clock.sleep });

		const result = await fetcher('cards/search');

		expect(result).toEqual({ data: [], object: 'list' });
	});
});

describe('MagicPageResult', () => {
	it('can be created without an explicit fetcher', () => {
		expect(() => new MagicPageResult<unknown>('cards/search', { page: 1 })).not.toThrow();
	});

	it('uses the fetcher it is given', async () => {
		const clock = createClock();
		const { calls, fetchStub } = createFetchStub([
			{ data: [{ name: 'Black Lotus' }], has_more: false, total_cards: 1 },
		]);
		const fetcher = createFetcher({
			fetch: fetchStub,
			maxRequestsPerSecond: 2,
			now: clock.now,
			sleep: clock.sleep,
		});
		const page = new MagicPageResult<{ name: string }>('cards/search', { page: 1 }, fetcher);

		const cards = await page.next();

		expect(cards).toEqual([{ name: 'Black Lotus' }]);
		expect(calls[0]).toContain('/cards/search');
		expect(page.count).toBe(1);
	});
});
