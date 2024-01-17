import fetcher from '../fetcher';
import type { ResultList, Ruling } from '../types.old';

class Rulings {
	public async byArenaId(id: number): Promise<Ruling[]> {
		return (await fetcher<ResultList<Ruling>>(['cards/arena', id, 'rulings']))?.data ?? [];
	}

	public async byId(id: string): Promise<Ruling[]> {
		return (await fetcher<ResultList<Ruling>>(['cards', id, 'rulings']))?.data ?? [];
	}

	public async byMtgoId(id: number): Promise<Ruling[]> {
		return (await fetcher<ResultList<Ruling>>(['cards/mtgo', id, 'rulings']))?.data ?? [];
	}

	public async byMultiverseId(id: number): Promise<Ruling[]> {
		return (await fetcher<ResultList<Ruling>>(['cards/multiverse', id, 'rulings']))?.data ?? [];
	}

	public async bySet(setCode: string, collectorNumber: number | string): Promise<Ruling[]> {
		return (await fetcher<ResultList<Ruling>>(['cards', setCode, `${collectorNumber}`, 'rulings']))?.data ?? [];
	}
}

const rulings = new Rulings();

export default rulings;
