import MagicQuery from '../query/MagicQuery';
import type { ResultList, Set } from '../types';

class Sets extends MagicQuery {
	public async all(): Promise<Set[]> {
		const result = await this.query<ResultList<Set>>('sets');

		return result?.data ?? [];
	}

	public async byCode(code: string): Promise<Set | undefined> {
		return await this.query<Set>(['sets', code]);
	}

	public async byId(id: string): Promise<Set | undefined> {
		return this.query<Set>(['sets', id]);
	}

	public async byTcgPlayerId(id: number): Promise<Set | undefined> {
		return this.query<Set>(['sets/tcgplayer', id]);
	}
}

export default new Sets();
