import fetcher, { MagicPageResult } from '../fetcher';
import type { Card, CardIdentifier, ResultCatalog, SearchOptions } from '../types.old';

class Cards {
	public async autoCompleteName(name: string): Promise<string[]> {
		const result = await fetcher<ResultCatalog>('cards/autocomplete', {
			q: name,
		});

		return result?.data ?? [];
	}

	public async byArenaId(id: number): Promise<Card | undefined> {
		return fetcher<Card>(['cards/arena', id]);
	}

	public async byId(id: string): Promise<Card | undefined> {
		return fetcher<Card>(['cards', id]);
	}

	public async byMtgoId(id: number): Promise<Card | undefined> {
		return fetcher<Card>(['cards/mtgo', id]);
	}

	public async byMultiverseId(id: number): Promise<Card | undefined> {
		return fetcher<Card>(['cards/multiverse', id]);
	}

	public async byName(name: string, fuzzy?: boolean): Promise<Card | undefined>;

	public async byName(name: string, set?: string, fuzzy?: boolean): Promise<Card | undefined>;

	public async byName(name: string, set?: boolean | string, fuzzy = false): Promise<Card | undefined> {
		let f = fuzzy;
		let s = set;
		if (typeof set === 'boolean') {
			f = set;
			s = undefined;
		}

		return fetcher<Card>('cards/named', {
			[f ? 'fuzzy' : 'exact']: name,
			set: s,
		});
	}

	public async bySet(setCode: string, collectorNumber: number, lang?: string): Promise<Card | undefined> {
		const path = ['cards', setCode, collectorNumber];
		if (lang) {
			path.push(lang);
		}

		return fetcher<Card>(path);
	}

	public async byTcgPlayerId(id: number): Promise<Card | undefined> {
		return fetcher<Card>(['cards/tcgplayer', id]);
	}

	public async collection(..._identifiers: CardIdentifier[]): Promise<Card[]> {
		throw new Error('Not implemented');
	}

	public async random(): Promise<Card | undefined> {
		return fetcher<Card>('cards/random');
	}

	public search(query: string, options?: SearchOptions | number): MagicPageResult<Card> {
		return new MagicPageResult<Card>('cards/search', {
			q: query,
			...(typeof options === 'number' ? { page: options } : { page: 1, ...options }),
		});
	}
}

export default new Cards();
