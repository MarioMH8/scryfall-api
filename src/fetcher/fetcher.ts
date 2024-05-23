import { ScryfallError } from '../error';
import type { TOrArrayOfT } from '../types';
import createDebounceFetcher from './debounce.fetcher';
import type { FetcherParams as FetcherParameters } from './fetcher.parameters';
import createRetryFetcher from './retry.fetcher';

const simpleFetcher = createDebounceFetcher(createRetryFetcher());

const endpoint = 'https://api.scryfall.com';

const DATE_REGEXP = /^\d{4}-\d{2}-\d{2}?$/;

const dateParser = (_key: string, value: unknown) => {
	if (typeof value === 'string' && DATE_REGEXP.test(value)) {
		return new Date(value);
	}

	return value;
};

export default async function fetcher<TData>(
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

	const url = new URL(`${endpoint}/${String(path)}`);
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
}
