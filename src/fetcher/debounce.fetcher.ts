import type { FetcherType } from './fetcher.type';

interface DebounceFetcherOptions {
	maxRequestsPerSecond: number;
	now?: (() => number) | undefined;
	sleep?: ((milliseconds: number) => Promise<void>) | undefined;
}

const defaultNow = () => Date.now();

async function sleep(milliseconds: number): Promise<void> {
	await new Promise(resolve => {
		setTimeout(resolve, milliseconds);
	});
}

export default function createDebounceFetcher<TFetcher extends FetcherType>(
	fetcher: TFetcher,
	{ maxRequestsPerSecond, now, sleep: sleepFunction }: DebounceFetcherOptions
): TFetcher {
	const interval = 1000 / maxRequestsPerSecond;
	const clock = now ?? defaultNow;
	const wait = sleepFunction ?? sleep;

	// The debounce state belongs to this fetcher instance, so each endpoint gets its own rate limit
	let lastRequestAt = -Infinity;

	return async function debounceFetcher(...arguments_): Promise<Response> {
		for (;;) {
			const currentTime = clock();
			const timeUntilNextRequest = lastRequestAt + interval - currentTime;
			if (timeUntilNextRequest <= 0) {
				lastRequestAt = currentTime;
				break;
			}

			// eslint-disable-next-line no-await-in-loop
			await wait(timeUntilNextRequest);
		}

		return fetcher(...arguments_);
	} as TFetcher;
}
