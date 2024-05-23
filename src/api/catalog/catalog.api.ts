import fetcher from '../../fetcher';
import type { Catalog } from './catalog.types';

class CatalogApi {
	public async artifactTypes(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/artifact-types');

		return response?.data ?? [];
	}

	public async artistNames(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/artist-names');

		return response?.data ?? [];
	}

	public async cardNames(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/card-names');

		return response?.data ?? [];
	}

	public async creatureTypes(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/creature-types');

		return response?.data ?? [];
	}

	public async enchantmentTypes(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/enchantment-types');

		return response?.data ?? [];
	}

	public async landTypes(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/land-types');

		return response?.data ?? [];
	}

	public async loyalties(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/loyalties');

		return response?.data ?? [];
	}

	public async planeswalkerTypes(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/planeswalker-types');

		return response?.data ?? [];
	}

	public async powers(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/powers');

		return response?.data ?? [];
	}

	public async spellTypes(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/spell-types');

		return response?.data ?? [];
	}

	public async toughnesses(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/toughnesses');

		return response?.data ?? [];
	}

	public async watermarks(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/watermarks');

		return response?.data ?? [];
	}

	public async wordBank(): Promise<string[]> {
		const response = await fetcher<Catalog>('catalog/word-bank');

		return response?.data ?? [];
	}
}

const catalog = new CatalogApi();

export default catalog;
