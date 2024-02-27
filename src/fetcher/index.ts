import { ScryfallError } from '../error';
import type { TOrArrayOfT } from '../types';
import createDebounceFetcher from './debounce.fetcher';
import type { FetcherParams } from './fetcher.params';
import MagicPageResult from './page.result';
import createRetryFetcher from './retry.fetcher';

const simpleFetcher = createDebounceFetcher(createRetryFetcher());

const endpoint = 'https://api.scryfall.com';

export default async function fetcher<TData>(
	apiPath: TOrArrayOfT<number | string | undefined>,
	params?: FetcherParams,
	body?: object
): Promise<TData | undefined> {
	let path: number | string = '';
	if (typeof apiPath === 'number' || typeof apiPath === 'string') {
		path = apiPath;
	} else if (apiPath) {
		path = apiPath.join('/');
	}

	const url = new URL(`${endpoint}/${path}`);
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			if (value !== undefined) {
				url.searchParams.append(key, `${value}`);
			}
		});
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
		const response = await simpleFetcher(url as URL, init);

		return (await response.json()) as TData;
	} catch (e) {
		if (e instanceof ScryfallError) {
			if (e.warnings) {
				console.warn(e.warnings);
			}
			if (e.code === 'not_found' || e.code === 'bad_request') {
				return undefined;
			}
		}
		throw e;
	}
}

export { MagicPageResult };
