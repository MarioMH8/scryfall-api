import fetcher from '../fetcher';
import type { ResultCatalog } from '../types.old';

class Catalog {
	public async artifactTypes(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/artifact-types'))?.data ?? [];
	}

	public async artistNames(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/artist-names'))?.data ?? [];
	}

	public async cardNames(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/card-names'))?.data ?? [];
	}

	public async creatureTypes(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/creature-types'))?.data ?? [];
	}

	public async enchantmentTypes(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/enchantment-types'))?.data ?? [];
	}

	public async landTypes(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/land-types'))?.data ?? [];
	}

	public async loyalties(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/loyalties'))?.data ?? [];
	}

	public async planeswalkerTypes(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/planeswalker-types'))?.data ?? [];
	}

	public async powers(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/powers'))?.data ?? [];
	}

	public async spellTypes(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/spell-types'))?.data ?? [];
	}

	public async toughnesses(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/toughnesses'))?.data ?? [];
	}

	public async watermarks(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/watermarks'))?.data ?? [];
	}

	public async wordBank(): Promise<string[]> {
		return (await fetcher<ResultCatalog>('catalog/word-bank'))?.data ?? [];
	}
}

const catalog = new Catalog();

export default catalog;
