import MagicPageResult from '../query/MagicPageResult';
import MagicQuery from '../query/MagicQuery';
import type { Card, CardIdentifier, ResultCatalog, ResultList, SearchOptions } from '../types';

class Cards extends MagicQuery {
	public async autoCompleteName(name: string): Promise<string[]> {
		const result = await this.query<ResultCatalog>('cards/autocomplete', {
			q: name,
		});

		return result?.data ?? [];
	}

	public async byArenaId(id: number): Promise<Card | undefined> {
		return this.query<Card>(['cards/arena', id]);
	}

	public async byId(id: string): Promise<Card | undefined> {
		return this.query<Card>(['cards', id]);
	}

	public async byMtgoId(id: number): Promise<Card | undefined> {
		return this.query<Card>(['cards/mtgo', id]);
	}

	public async byMultiverseId(id: number): Promise<Card | undefined> {
		return this.query<Card>(['cards/multiverse', id]);
	}

	public async byName(name: string, fuzzy?: boolean): Promise<Card | undefined>;

	public async byName(name: string, set?: string, fuzzy?: boolean): Promise<Card | undefined>;

	public async byName(
		name: string,
		set?: boolean | string,
		fuzzy = false
	): Promise<Card | undefined> {
		let f = fuzzy;
		let s = set;
		if (typeof set === 'boolean') {
			f = set;
			s = undefined;
		}

		return this.query<Card>('cards/named', {
			[f ? 'fuzzy' : 'exact']: name,
			set: s,
		});
	}

	public async bySet(
		setCode: string,
		collectorNumber: number,
		lang?: string
	): Promise<Card | undefined> {
		const path = ['cards', setCode, collectorNumber];
		if (lang) {
			path.push(lang);
		}

		return this.query<Card>(path);
	}

	public async byTcgPlayerId(id: number): Promise<Card | undefined> {
		return this.query<Card>(['cards/tcgplayer', id]);
	}

	public async collection(...identifiers: CardIdentifier[]): Promise<Card[]> {
		const cards: Card[] = [];
		for (let i = 0; i < identifiers.length; i += 75) {
			// the api only supports a max collection size of 75, so we take the list of identifiers (any length)
			// and split it into 75 card-max requests
			const collectionSection = { identifiers: identifiers.slice(i, i + 75) };
			/* eslint no-await-in-loop: "warn" */
			const result = await this.query<ResultList<Card, CardIdentifier>>(
				'cards/collection',
				undefined,
				collectionSection
			);
			cards.push(...(result?.data ?? []));
		}

		return cards;
	}

	public async random(): Promise<Card | undefined> {
		return this.query<Card>('cards/random');
	}

	public search(query: string, options?: SearchOptions | number): MagicPageResult<Card, Cards> {
		return new MagicPageResult<Card, Cards>(this, 'cards/search', {
			q: query,
			...(typeof options === 'number' ? { page: options } : { page: 1, ...options }),
		});
	}
}

export default new Cards();
