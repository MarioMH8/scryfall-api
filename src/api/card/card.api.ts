import fetcher, { MagicPageResult } from '../../fetcher';
import type { ListResponse } from '../../response';
import type { CardIdentifier } from '../card-identifier';
import type { Catalog } from '../catalog';
import type { Card } from './card.types';
import type { CardSearch } from './card-search.types';

class CardApi {
	/*
	 * Returns up to 20 full English card names that could be autocompletions of the given string parameter.
	 * @param {string} name
	 * 	The string to search for
	 * @returns {Promise<string[]>}
	 * 	A list of up to 20 full English card names.
	 */
	public async autoCompleteName(name: string): Promise<string[]> {
		const result = await fetcher<Catalog>('cards/autocomplete', {
			q: name,
		});

		return result?.data ?? [];
	}

	/*
	 * Returns a single card with the given Magic: The Gathering Arena ID.
	 * @param {number} id
	 * 	The Magic: The Gathering Arena ID of the card to retrieve.
	 * @returns {Promise<Card | undefined>}
	 * 	Returns a single card or undefined if no card is found.
	 */
	public async byArenaId(id: number): Promise<Card | undefined> {
		return fetcher<Card>(['cards/arena', id]);
	}

	/*
	 * Returns a single card with the given Scryfall ID.
	 * @param {number} id
	 * 	The Scryfall ID.
	 * @returns {Promise<Card | undefined>}
	 * 	Returns a single card or undefined if no card is found.
	 */
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

	public async collection(...identifiers: CardIdentifier[]): Promise<Card[]> {
		const cards: Card[] = [];
		for (let index = 0; index < identifiers.length; index += 75) {
			/*
			 * The api only supports a max collection size of 75, so we take the list of identifiers (any length)
			 * and split it into 75 card-max requests
			 */
			const collectionSection = { identifiers: identifiers.slice(index, index + 75) };
			const result = await fetcher<ListResponse<Card, CardIdentifier>>(
				'cards/collection',
				undefined,
				collectionSection
			);
			cards.push(...(result?.data ?? []));
		}

		return cards;
	}

	public async random(): Promise<Card> {
		return fetcher<Card>('cards/random') as Promise<Card>;
	}

	public search(query: string, options?: CardSearch | number): MagicPageResult<Card> {
		return new MagicPageResult<Card>('cards/search', {
			q: query,
			...(typeof options === 'number' ? { page: options } : { ...options, page: options?.page ?? 1 }),
		});
	}
}

const cards = new CardApi();

export default cards;
