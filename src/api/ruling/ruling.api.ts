import fetcher from '../../fetcher';
import type { ListResponse } from '../../response';
import type { Ruling } from './ruling.schema';

class RulingApi {
	public async byArenaId(id: number): Promise<Ruling[]> {
		return (await fetcher<ListResponse<Ruling>>(['cards/arena', id, 'rulings']))?.data ?? [];
	}

	public async byId(id: string): Promise<Ruling[]> {
		return (await fetcher<ListResponse<Ruling>>(['cards', id, 'rulings']))?.data ?? [];
	}

	public async byMtgoId(id: number): Promise<Ruling[]> {
		return (await fetcher<ListResponse<Ruling>>(['cards/mtgo', id, 'rulings']))?.data ?? [];
	}

	public async byMultiverseId(id: number): Promise<Ruling[]> {
		return (await fetcher<ListResponse<Ruling>>(['cards/multiverse', id, 'rulings']))?.data ?? [];
	}

	public async bySet(setCode: string, collectorNumber: number | string): Promise<Ruling[]> {
		return (await fetcher<ListResponse<Ruling>>(['cards', setCode, `${collectorNumber}`, 'rulings']))?.data ?? [];
	}
}

const rulings = new RulingApi();

export default rulings;
