import type { FetcherType } from './fetcher.type';

// Time when the last api call was made
let lastQuery = 100;

// The api requests 50-100 ms between calls, we go on the generous side and never wait less than 100 ms between calls
const rateLimit = 100;

async function sleep(ms = 0) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

async function debounce(): Promise<void> {
	const now = Date.now();
	const timeSinceLastQuery = now - lastQuery;
	if (timeSinceLastQuery >= rateLimit) {
		lastQuery = now;
	} else {
		const timeUntilNextQuery = rateLimit - timeSinceLastQuery;
		lastQuery += timeUntilNextQuery;
		await sleep(timeUntilNextQuery);
	}
}

export default function createDebounceFetcher<TFetcher extends FetcherType>(
	fetcher: TFetcher = fetch as TFetcher
): TFetcher {
	return async function debounceFetcher(...arguments_): Promise<Response> {
		await debounce();

		return fetcher(...arguments_);
	} as TFetcher;
}
