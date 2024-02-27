import type { Nullable } from '../types';

interface BaseResponse {
	has_more: boolean;
	next_page: Nullable<string>;
	total_cards: Nullable<number>;
	warnings: Nullable<string[]>;
}

export interface ListResponse<T, NOT_FOUND = never> extends BaseResponse {
	data: T[];
	not_found?: NOT_FOUND[];
}
