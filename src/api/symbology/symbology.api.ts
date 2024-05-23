import { InvalidScryfallArgumentError } from '../../error';
import fetcher from '../../fetcher';
import type { ListResponse } from '../../response';
import type { ManaCost, Symbology } from './symbology.types';

class SymbologyApi {
	public async all(): Promise<Symbology[]> {
		const list = await fetcher<ListResponse<Symbology>>('symbology');

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
				cmc: 0,
				colorless: false,
				colors: [],
				cost: '',
				monocolored: false,
				multicolored: false,
				object: 'mana_cost',
			}
		);
	}
}
const symbology = new SymbologyApi();

export default symbology;
