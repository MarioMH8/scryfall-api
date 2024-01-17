import { InvalidScryfallArgumentError } from '../error';
import fetcher from '../fetcher';
import type { CardSymbol, ManaCost, ResultList } from '../types.old';

class Symbology {
	public async all(): Promise<CardSymbol[]> {
		const list = await fetcher<ResultList<CardSymbol>>('symbology');

		return list?.data ?? [];
	}

	public async parseMana(shorthand: string): Promise<ManaCost> {
		if (!shorthand || typeof shorthand !== 'string') {
			throw new InvalidScryfallArgumentError('shorthand must be a string');
		}

		const cost = await fetcher<ManaCost>('symbology/parse-mana', {
			cost: shorthand,
		});

		return (
			cost ?? {
				cost: '',
				colors: [],
				cmc: 0,
				colorless: false,
				monocolored: false,
				multicolored: false,
				object: 'mana_cost',
			}
		);
	}
}
const symbology = new Symbology();

export default symbology;
