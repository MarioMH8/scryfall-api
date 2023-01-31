import type { SearchError } from './SearchError';

export interface RetryStrategy {
	attempts: number;
	/**
	 * Whether even `not_found` and `bad_request` errors should be retried.
	 * @deprecated Don't use this, this is for unit tests
	 */
	forced?: boolean;
	timeout?: number;

	// tslint:disable-next-line space-before-function-paren typescript autoformats this to remove the space
	canRetry?(error?: SearchError): boolean;
}
