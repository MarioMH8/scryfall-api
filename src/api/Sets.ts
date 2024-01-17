import fetcher from '../fetcher';
import type { ResultList, Set } from '../types.old';

class Sets {
	public async all(): Promise<Set[]> {
		const result = await fetcher<ResultList<Set>>('sets');

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

export default new Sets();
