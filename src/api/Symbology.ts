import InvalidScryfallArgumentError from '../error/invalid.error';
import fetcher from '../fetcher';
import type { CardSymbol, ListResponse, ManaCost } from '../types';

class Symbology {
	public async all(): Promise<CardSymbol[]> {
		const list = await fetcher<ListResponse<CardSymbol>>('symbology');

		return list.data;
	}

	public async parseMana(shorthand: string): Promise<ManaCost> {
		if (!shorthand || typeof shorthand !== 'string') {
			throw new InvalidScryfallArgumentError('shorthand must be a string');
		}

		return await fetcher('symbology/parse-mana', {
			cost: shorthand,
		});
	}
}
const symbology = new Symbology();

export default symbology;
