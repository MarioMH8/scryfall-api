import type { ZodType } from 'zod';

import type { TOrArrayOfT } from '../types';
import createDebounceFetcher from './debounce.fetcher';
import type { FetcherParams } from './fetcher.params';
import createRetryFetcher from './retry.fetcher';
import createZodFetcher from './zod.fetcher';

const simpleFetcher = createDebounceFetcher(createRetryFetcher());
const zodFetcher = createZodFetcher(simpleFetcher);

const endpoint = 'https://api.scryfall.com';

export default async function fetcher<TData>(
	apiPath: TOrArrayOfT<number | string | undefined>,
	params?: FetcherParams,
	schema?: ZodType<TData>
): Promise<TData> {
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

	if (schema) {
		return zodFetcher(schema, url, {
			headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
		});
	}

	const response = await simpleFetcher(url);

	return (await response.json()) as TData;
}
