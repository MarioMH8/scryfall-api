import type { SearchError } from '../types';

export class MagicQueryError extends Error {
	constructor(readonly data?: SearchError | string) {
		super(typeof data === 'string' ? data : data?.details);
		Object.setPrototypeOf(this, MagicQueryError.prototype);
	}
}
