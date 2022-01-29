import MagicQuery from '../query/MagicQuery';
import { ResultCatalog } from '../types';

class Catalog extends MagicQuery {
	public async artifactTypes(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/artifact-types'))?.data || [];
	}

	public async artistNames(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/artist-names'))?.data || [];
	}

	public async cardNames(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/card-names'))?.data || [];
	}

	public async creatureTypes(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/creature-types'))?.data || [];
	}

	public async enchantmentTypes(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/enchantment-types'))?.data || [];
	}

	public async landTypes(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/land-types'))?.data || [];
	}

	public async loyalties(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/loyalties'))?.data || [];
	}

	public async planeswalkerTypes(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/planeswalker-types'))?.data || [];
	}

	public async powers(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/powers'))?.data || [];
	}

	public async spellTypes(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/spell-types'))?.data || [];
	}

	public async toughnesses(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/toughnesses'))?.data || [];
	}

	public async watermarks(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/watermarks'))?.data || [];
	}

	public async wordBank(): Promise<string[]> {
		return (await this.query<ResultCatalog>('catalog/word-bank'))?.data || [];
	}
}

export default new Catalog();
