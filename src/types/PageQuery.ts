import type { QueryValue } from './PageQueryValue';

export interface PageQuery {
	[key: string]: QueryValue;
	page: number;
}
