import MagicQuery from '../query/MagicQuery';
import type { ResultList, Ruling } from '../types';

class Rulings extends MagicQuery {
	public async byArenaId(id: number): Promise<Ruling[]> {
		return (await this.query<ResultList<Ruling>>(['cards/arena', id, 'rulings']))?.data ?? [];
	}

	public async byId(id: string): Promise<Ruling[]> {
		return (await this.query<ResultList<Ruling>>(['cards', id, 'rulings']))?.data ?? [];
	}

	public async byMtgoId(id: number): Promise<Ruling[]> {
		return (await this.query<ResultList<Ruling>>(['cards/mtgo', id, 'rulings']))?.data ?? [];
	}

	public async byMultiverseId(id: number): Promise<Ruling[]> {
		return (await this.query<ResultList<Ruling>>(['cards/multiverse', id, 'rulings']))?.data ?? [];
	}

	public async bySet(setCode: string, collectorNumber: number | string): Promise<Ruling[]> {
		return (await this.query<ResultList<Ruling>>(['cards', setCode, `${collectorNumber}`, 'rulings']))?.data ?? [];
	}
}

export default new Rulings();
