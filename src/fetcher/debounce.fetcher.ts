/* eslint-disable unicorn/no-top-level-assignment-in-function */
import type { FetcherType } from './fetcher.type';

// Time when the last api call was made
let lastQuery = 100;


async function sleep(ms = 0) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

async function debounce(rateLimit: number): Promise<void> {
	while(true) {
		const now = Date.now();
		const timeSinceLastQuery = now - lastQuery;
		if (timeSinceLastQuery >= rateLimit) {
			lastQuery = now;
			break;
		} else {
			const timeUntilNextQuery = rateLimit - timeSinceLastQuery;
			await sleep(timeUntilNextQuery);
		}
	}
}

export default function createDebounceFetcher<TFetcher extends FetcherType>(
	{ maxRequestsPerSecond }: { maxRequestsPerSecond: number },
): TFetcher {
	return async function debounceFetcher(...arguments_): Promise<Response> {
		await debounce(1000 / maxRequestsPerSecond);

		// It's important we call `fetch` directly here so we can spy on it in unit tests
		return fetch(...arguments_);
	} as TFetcher;
}
