import type { Sort } from './Sort';
import type { SortDirection } from './SortDirection';
import type { UniqueStrategy } from './UniqueStrategy';

export interface SearchOptions {
	dir?: keyof typeof SortDirection;
	include_extras?: boolean;
	include_multilingual?: boolean;
	include_variations?: boolean;
	order?: keyof typeof Sort;
	/**
	 * The page to start on. Defaults to `1`, for first page. A page is 175 cards.
	 */
	page?: number;
	unique?: keyof typeof UniqueStrategy;
}
