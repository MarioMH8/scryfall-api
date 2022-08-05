import MagicQuery from '../query/MagicQuery';
import { CardSymbol, ManaCost, ResultList } from '../types';

class Symbology extends MagicQuery {
	public async all(): Promise<CardSymbol[]> {
		return (await this.query<ResultList<CardSymbol>>('symbology'))?.data || [];
	}

	public async parseMana(shorthand: string): Promise<ManaCost | undefined> {
		return await this.query<ManaCost>('symbology/parse-mana', {
			cost: shorthand,
		});
	}
}

export default new Symbology();
