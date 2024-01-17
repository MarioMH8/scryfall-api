import type { ErrorResponse } from '../types';

export default class ScryfallError extends Error {
	readonly code: string;
	readonly status: number;
	readonly type?: string | undefined | null;
	readonly warnings?: string[] | undefined | null;

	constructor(e: ErrorResponse) {
		super(e.details);
		this.code = e.code;
		this.status = e.status;
		this.type = e.type;
		this.warnings = e.warnings;
	}
}
