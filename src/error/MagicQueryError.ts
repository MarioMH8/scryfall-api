import { SearchError } from '../types';

export class MagicQueryError extends Error {
	constructor(readonly data?: SearchError) {
		super(data?.details);
		Object.setPrototypeOf(this, MagicQueryError.prototype);
	}
}
