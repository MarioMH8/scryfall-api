import fetcher from '../../fetcher';
import type { ListResponse } from '../../response';
import type { Set } from './set.types';

class SetApi {
	public async all(): Promise<Set[]> {
		const result = await fetcher<ListResponse<Set>>('sets');

		return result?.data ?? [];
	}

	public async byCode(code: string): Promise<Set | undefined> {
		return await fetcher<Set>(['sets', code]);
	}

	public async byId(id: string): Promise<Set | undefined> {
		return fetcher<Set>(['sets', id]);
	}

	public async byTcgPlayerId(id: number): Promise<Set | undefined> {
		return fetcher<Set>(['sets/tcgplayer', id]);
	}
}

const set = new SetApi();

export default set;
