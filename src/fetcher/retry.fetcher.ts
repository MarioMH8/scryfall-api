import { ScryfallError } from '../error';
import UnknownScryfallError from '../error/unknown.error';
import type { FetcherType } from './fetcher.type';

interface RetryOptions {
	maxAttempts?: number;
	canRetry?(response: Response): Promise<boolean> | boolean;
}

const defaultCanRetry = async (response: Response) => {
	const object = (await response.json()) as object;
	const status = 'status' in object ? Number(object.status) : undefined;
	if (status && status >= 500) {
		return true;
	}
	const code = 'code' in object && typeof object.code === 'string' ? object.code : undefined;

	return code !== 'not_found' && code !== 'bad_request';
};

export default function createRetryFetcher<TFetcher extends FetcherType>(
	{ canRetry = defaultCanRetry, maxAttempts = 3 }: RetryOptions = {},
	fetcher: TFetcher = fetch as TFetcher
): TFetcher {
	let retries = 0;

	return async function retryFetcher(...arguments_): Promise<Response> {
		retries++;
		const response = await fetcher(...arguments_);

		if (response.ok) {
			return response;
		}
		const object = (await response.json()) as object;
		const code = 'code' in object && typeof object.code === 'string' ? object.code : undefined;
		const status = 'status' in object ? Number(object.status) : undefined;
		const details = 'details' in object && typeof object.details === 'string' ? object.details : undefined;
		const type = 'type' in object && typeof object.type === 'string' ? object.type : undefined;
		const warnings =
			'warnings' in object && Array.isArray(object.warnings) ? (object.warnings as string[]) : undefined;

		if (retries >= maxAttempts) {
			if (code && details && status) {
				throw new ScryfallError(code, details, status, type, warnings);
			}

			throw new UnknownScryfallError(`Request failed with status ${response.status.toFixed(0)}`);
		}

		if (canRetry(response)) {
			return retryFetcher(...arguments_);
		}

		if (code && details && status) {
			throw new ScryfallError(code, details, status, type, warnings);
		}

		throw new UnknownScryfallError(`Request failed with status ${response.status.toFixed(0)}`);
	} as TFetcher;
}
