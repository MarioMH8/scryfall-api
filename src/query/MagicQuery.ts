import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { MagicQueryError } from '../error/MagicQueryError';
import { Query, RetryStrategy, SearchError, TOrArrayOfT } from '../types';

export default class MagicQuery {
	public static retry: RetryStrategy = { attempts: 1 };
	// the path to the api
	private static readonly endpoint = 'https://api.scryfall.com';
	// time where the last api call was made
	private static lastQuery = 100;
	// the api requests 50-100 ms between calls, we go on the generous side and never wait less than 100 ms between calls
	private static readonly rateLimit = 100;

	private static canRetry(error?: SearchError) {
		if (error?.code == 'not_found' || error?.code == 'bad_request') return false;
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

	private static sleep(ms = 0) {
		return new Promise(resolve => setTimeout(resolve, ms));
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
			...requestOptions,
		};

		try {
			return await Axios.request<T, AxiosResponse<T>, Y>(config);
		} catch (e: any) {
			if (e['isAxiosError']) {
				const error = e as AxiosError<SearchError>;
				throw new MagicQueryError(error.response?.data);
			} else {
				throw e;
			}
		}
	}

	public async query<T = unknown, Y = unknown>(
		apiPath: TOrArrayOfT<string | number | undefined>,
		query?: Query,
		post?: Y,
		requestOptions?: AxiosRequestConfig
	): Promise<T | undefined> {
		if (Array.isArray(apiPath)) {
			apiPath = apiPath.join('/');
		}

		let retries: number;
		let result;

		for (retries = 0; retries < MagicQuery.retry.attempts; retries++) {
			let error: SearchError | undefined;
			try {
				result = await MagicQuery.tryQuery<T, Y>(`${apiPath}`, query, post, requestOptions);
			} catch (e: any) {
				if (e instanceof MagicQueryError) {
					error = e.data;
				} else {
					throw e;
				}
			}
			if (result || !MagicQuery.canRetry(error)) break;
			await MagicQuery.sleep(MagicQuery.retry.timeout);
		}

		return result?.data;
	}
}
