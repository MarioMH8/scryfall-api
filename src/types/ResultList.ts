import type { ResultData } from './ResultData';

export interface ResultList<T, NOT_FOUND = never> extends ResultData<T, NOT_FOUND> {
	has_more: boolean;
	next_page: string;
	total_cards: string;
	warnings: string[];
}
