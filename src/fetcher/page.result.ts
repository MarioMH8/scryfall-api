import type { PageQuery, ResultList } from '../types.old';
import fetcher from './index';

export default class MagicPageResult<T> {
	private _count: number;

	private _hasMore: boolean;
	constructor(
		private readonly apiPath: string,
		private readonly query: PageQuery
	) {
		this._hasMore = true;
		this._count = 0;
	}

	public get count(): number {
		return this._count;
	}

	public get hasMore(): boolean {
		return this._hasMore;
	}

	public async all(): Promise<T[]> {
		const r: T[] = [];
		while (this._hasMore) {
			const result = await this.next();
			r.push(...result);
		}

		return r;
	}

	public async get(limit: number): Promise<T[]> {
		const r: T[] = [];
		while (this._hasMore) {
			const result = await this.next();
			r.push(...result);
			if (r.length === limit) {
				return r;
			}
			if (r.length > limit) {
				return r.slice(0, limit);
			}
		}

		return r;
	}

	public async next(): Promise<T[]> {
		const results = await fetcher<ResultList<T>>(this.apiPath, this.query);
		this._hasMore = results?.has_more ?? false;
		this._count = Number.parseInt(`${results?.total_cards ?? 0}`, 10);
		if (this._hasMore) {
			this.setNextPage();
		}

		return results?.data ?? [];
	}

	public async page(page: number): Promise<T[]> {
		this.query.page = page;

		return this.next();
	}

	private setNextPage(): void {
		this.query.page = this.query.page + 1;
	}
}
