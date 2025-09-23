import type { ListResponse } from '../response';
import fetcher from './fetcher';

type QueryValue = boolean | number | string | undefined;

export interface PageQuery {
	[key: string]: QueryValue;
	page: number;
}

export default class MagicPageResult<T> {
	#count = 0;
	#hasMore = true;

	constructor(
		private readonly apiPath: string,
		private readonly query: PageQuery
	) {}

	public get count(): number {
		return this.#count;
	}

	public get hasMore(): boolean {
		return this.#hasMore;
	}

	public async all(): Promise<T[]> {
		const r: T[] = [];
		while (this.#hasMore) {
			const result = await this.next();
			r.push(...result);
		}

		return r;
	}

	public async get(limit: number): Promise<T[]> {
		const r: T[] = [];
		while (this.#hasMore) {
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
		const results = await fetcher<ListResponse<T>>(this.apiPath, this.query);
		this.#hasMore = results?.has_more ?? false;
		this.#count = Number.parseInt(results?.total_cards?.toFixed(0) ?? '0', 10);
		if (this.#hasMore) {
			this.setNextPage();
		}

		return results?.data ?? [];
	}

	public async page(page: number): Promise<T[]> {
		this.query.page = page;

		return this.next();
	}

	private setNextPage(): void {
		this.query.page += 1;
	}
}
