import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios, { AxiosError } from 'axios';

import { MagicQueryError } from '../error/MagicQueryError';
import type { Query, RetryStrategy, SearchError, TOrArrayOfT } from '../types';

export default abstract class MagicQuery {
	public static retry: RetryStrategy = { attempts: 1 };
	// the path to the api
	private static readonly endpoint = 'https://api.scryfall.com';
	// time when the last api call was made
	private static lastQuery = 100;
	// the api requests 50-100 ms between calls, we go on the generous side and never wait less than 100 ms between calls
	private static readonly rateLimit = 100;

	private static canRetry(error?: SearchError | string) {
		if (typeof error === 'string') {
			return false;
		}
		if (error?.code === 'not_found' || error?.code === 'bad_request') {
			return false;
		}

		return !MagicQuery.retry.canRetry || MagicQuery.retry.canRetry(error);
	}

	private static async debounce(): Promise<void> {
		const now = Date.now();
		const timeSinceLastQuery = now - MagicQuery.lastQuery;
		if (timeSinceLastQuery >= MagicQuery.rateLimit) {
			MagicQuery.lastQuery = now;
		} else {
			const timeUntilNextQuery = MagicQuery.rateLimit - timeSinceLastQuery;
			MagicQuery.lastQuery += timeUntilNextQuery;
			await MagicQuery.sleep(timeUntilNextQuery);
		}
	}

	private static async sleep(ms = 0) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}

	private static async tryQuery<T, Y>(
		apiPath: string,
		query?: Query,
		post?: Y,
		requestOptions?: AxiosRequestConfig
	): Promise<AxiosResponse<T, Y>> {
		await MagicQuery.debounce();

		const config: AxiosRequestConfig<Y> = {
			data: post,
			method: post ? 'POST' : 'GET',
			params: query,
			url: `${MagicQuery.endpoint}/${apiPath}`,
			headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
			...requestOptions,
		};

		try {
			return await Axios.request<T, AxiosResponse<T>, Y>(config);
		} catch (e: any) {
			/* eslint @typescript-eslint/no-unsafe-member-access: "warn" */
			if (e['isAxiosError']) {
				const error = e as AxiosError<SearchError>;
				throw new MagicQueryError(error.response?.data ?? error.message);
			} else {
				throw e;
			}
		}
	}

	public async query<T = unknown, Y = unknown>(
		apiPath: TOrArrayOfT<number | string | undefined>,
		query?: Query,
		post?: Y,
		requestOptions?: AxiosRequestConfig
	): Promise<T | undefined> {
		let path: number | string = '';
		if (typeof apiPath === 'number' || typeof apiPath === 'string') {
			path = apiPath;
		} else if (apiPath) {
			path = apiPath.join('/');
		}

		let retries: number;
		let result;

		for (retries = 0; retries < MagicQuery.retry.attempts; retries++) {
			let error: SearchError | string | undefined;
			try {
				/* eslint no-await-in-loop: "warn" */
				result = await MagicQuery.tryQuery<T, Y>(`${path}`, query, post, requestOptions);
			} catch (e: any) {
				if (e instanceof MagicQueryError) {
					error = e.data;
				} else {
					throw e;
				}
			}
			if (result || !MagicQuery.canRetry(error)) {
				break;
			}
			/* eslint no-await-in-loop: "warn" */
			await MagicQuery.sleep(MagicQuery.retry.timeout);
		}

		return result?.data;
	}
}
