import { ScryfallError } from '../error';
import UnknownScryfallError from '../error/unknown.error';
import { ErrorResponse } from '../schemas';
import type { Fetcher } from './fetcher';

interface RetryOptions {
	maxAttempts?: number;
	canRetry?(response: Response): boolean;
}

const defaultCanRetry = (response: Response) => {
	const parse = ErrorResponse.safeParse(response.json());
	if (!parse.success) {
		return response.status >= 500;
	}
	const error = parse.data;

	return error.code !== 'not_found' && error.code !== 'bad_request';
};

export default function createRetryFetcher<TFetcher extends Fetcher>(
	{ maxAttempts = 3, canRetry = defaultCanRetry }: RetryOptions = {},
	fetcher: TFetcher = fetch as TFetcher
): TFetcher {
	let retries = 0;

	return async function retryFetcher(...args): Promise<Response> {
		retries++;
		const response = await fetcher(...args);

		if (response.ok) {
			return response;
		}
		const parse = ErrorResponse.safeParse(response.json());

		if (retries >= maxAttempts) {
			if (parse.success) {
				throw new ScryfallError(parse.data);
			}

			throw new UnknownScryfallError(`Request failed with status ${response.status}`);
		}

		if (canRetry(response)) {
			return retryFetcher(...args);
		}

		if (parse.success) {
			throw new ScryfallError(parse.data);
		}

		throw new UnknownScryfallError(`Request failed with status ${response.status}`);
	} as TFetcher;
}
