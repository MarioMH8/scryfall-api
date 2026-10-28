import { ScryfallError } from '../error';
import type { TOrArrayOfT } from '../types';
import createDebounceFetcher from './debounce.fetcher';
import type { FetcherParams as FetcherParameters } from './fetcher.parameters';
import type { FetcherType } from './fetcher.type';
import createRetryFetcher from './retry.fetcher';

const scryfallEndpoint = 'https://api.scryfall.com';

// https://scryfall.com/docs/api/rate-limits
const defaultRequestsPerSecond = 10;

const DATE_REGEXP = /^\d{4}-\d{2}-\d{2}?$/;

const dateParser = (_key: string, value: unknown) => {
	if (typeof value === 'string' && DATE_REGEXP.test(value)) {
		return new Date(value);
	}

	return value;
};

type TFetcher = <TData>(
	apiPath: TOrArrayOfT<number | string | undefined>,
	parameters?: FetcherParameters,
	body?: object
) => Promise<TData | undefined>;

interface CreateFetcherOptions {
	fetch?: FetcherType | undefined;
	maxRequestsPerSecond?: number | undefined;
	now?: (() => number) | undefined;
	sleep?: ((milliseconds: number) => Promise<void>) | undefined;
}

// Every request counts against Scryfall's global limit, so this fetcher is shared by all endpoints
const globallyLimitedFetch = createDebounceFetcher(fetch, {
	maxRequestsPerSecond: defaultRequestsPerSecond,
});

function createFetcher({
	fetch: fetchFunction,
	maxRequestsPerSecond = defaultRequestsPerSecond,
	now,
	sleep,
}: CreateFetcherOptions = {}): TFetcher {
	const globalFetch = fetchFunction
		? createDebounceFetcher(fetchFunction, { maxRequestsPerSecond: defaultRequestsPerSecond, now, sleep })
		: globallyLimitedFetch;
	const retryingFetch = createRetryFetcher(globalFetch);
	const simpleFetcher =
		maxRequestsPerSecond === defaultRequestsPerSecond
			? retryingFetch
			: createDebounceFetcher(retryingFetch, { maxRequestsPerSecond, now, sleep });

	return async function fetcher<TData>(
		apiPath: TOrArrayOfT<number | string | undefined>,
		parameters?: FetcherParameters,
		body?: object
	): Promise<TData | undefined> {
		let path: number | string = '';
		if (typeof apiPath === 'number' || typeof apiPath === 'string') {
			path = apiPath;
		} else if (apiPath) {
			path = apiPath.join('/');
		}

		const url = new URL(`${scryfallEndpoint}/${String(path)}`);
		if (parameters) {
			for (const [key, value] of Object.entries(parameters)) {
				if (value !== undefined) {
					url.searchParams.append(key, value.toString());
				}
			}
		}

		try {
			const init: RequestInit = {
				method: body ? 'POST' : 'GET',
			};
			if (body) {
				init.body = JSON.stringify(body);
				init.headers = {
					'Content-Type': 'application/json',
				};
			}
			const response = await simpleFetcher(url, init);

			const content = await response.text();

			return JSON.parse(content, dateParser) as TData;
		} catch (error) {
			if (error instanceof ScryfallError) {
				if (error.warnings) {
					console.warn(error.warnings);
				}
				if (error.code === 'not_found' || error.code === 'bad_request') {
					return undefined;
				}
			}
			throw error;
		}
	};
}

const fetcher = createFetcher();

export { createFetcher, type CreateFetcherOptions, type TFetcher };
export default fetcher;
