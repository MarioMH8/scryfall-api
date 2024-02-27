import type { Nullable } from '../types';

export interface ErrorResponse {
	code: string;
	details: string;
	status: number;
	type?: Nullable<string>;
	warnings?: Nullable<string[]>;
}
