import type { QueryValue } from './PageQueryValue';

export type PageQuery = {
	[key: string]: QueryValue;
	page: number;
};
