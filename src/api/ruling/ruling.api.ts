import fetcher from '../../fetcher';
import type { ListResponse } from '../../response';
import type { Ruling } from './ruling.types';

class RulingApi {
	public async byArenaId(id: number): Promise<Ruling[]> {
		const response = await fetcher<ListResponse<Ruling>>(['cards/arena', id, 'rulings']);

		return response?.data ?? [];
	}

	public async byId(id: string): Promise<Ruling[]> {
		const response = await fetcher<ListResponse<Ruling>>(['cards', id, 'rulings']);

		return response?.data ?? [];
	}

	public async byMtgoId(id: number): Promise<Ruling[]> {
		const response = await fetcher<ListResponse<Ruling>>(['cards/mtgo', id, 'rulings']);

		return response?.data ?? [];
	}

	public async byMultiverseId(id: number): Promise<Ruling[]> {
		const response = await fetcher<ListResponse<Ruling>>(['cards/multiverse', id, 'rulings']);

		return response?.data ?? [];
	}

	public async bySet(setCode: string, collectorNumber: number | string): Promise<Ruling[]> {
		const response = await fetcher<ListResponse<Ruling>>(['cards', setCode, String(collectorNumber), 'rulings']);

		return response?.data ?? [];
	}
}

const rulings = new RulingApi();

export default rulings;
