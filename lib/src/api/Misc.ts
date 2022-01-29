import MagicQuery from '../query/MagicQuery';
import { HomepageLink, ResultList } from '../types';

class Misc extends MagicQuery {
	public async homepageLinks(): Promise<HomepageLink[]> {
		return (await this.query<ResultList<HomepageLink>>('homepage-links'))?.data || [];
	}
}

export default new Misc();
