import fetcher from '../../fetcher';
import type { Catalog } from './catalog.schema';

class CatalogApi {
	public async artifactTypes(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/artifact-types'))?.data ?? [];
	}

	public async artistNames(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/artist-names'))?.data ?? [];
	}

	public async cardNames(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/card-names'))?.data ?? [];
	}

	public async creatureTypes(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/creature-types'))?.data ?? [];
	}

	public async enchantmentTypes(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/enchantment-types'))?.data ?? [];
	}

	public async landTypes(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/land-types'))?.data ?? [];
	}

	public async loyalties(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/loyalties'))?.data ?? [];
	}

	public async planeswalkerTypes(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/planeswalker-types'))?.data ?? [];
	}

	public async powers(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/powers'))?.data ?? [];
	}

	public async spellTypes(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/spell-types'))?.data ?? [];
	}

	public async toughnesses(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/toughnesses'))?.data ?? [];
	}

	public async watermarks(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/watermarks'))?.data ?? [];
	}

	public async wordBank(): Promise<string[]> {
		return (await fetcher<Catalog>('catalog/word-bank'))?.data ?? [];
	}
}

const catalog = new CatalogApi();

export default catalog;
