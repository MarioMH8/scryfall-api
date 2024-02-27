import { describe, expect, it } from 'bun:test';

import { Catalogs } from '../src';

describe('scryfall-sdk', () => {
	describe('Catalog', () => {
		it('card names', async () => {
			const result = await Catalogs.cardNames();
			expect(result.length).toBeGreaterThanOrEqual(18059);
		});

		it('artist names', async () => {
			const result = await Catalogs.artistNames();
			expect(result.length).toBeGreaterThanOrEqual(676);
		});

		it('word bank', async () => {
			const result = await Catalogs.wordBank();
			expect(result.length).toBeGreaterThanOrEqual(12892);
		});

		it('creature types', async () => {
			const result = await Catalogs.creatureTypes();
			expect(result.length).toBeGreaterThanOrEqual(242);
		});

		it('planeswalker types', async () => {
			const result = await Catalogs.planeswalkerTypes();
			expect(result.length).toBeGreaterThanOrEqual(42);
		});

		it('land types', async () => {
			const result = await Catalogs.landTypes();
			expect(result.length).toBeGreaterThanOrEqual(13);
		});

		it('artifact types', async () => {
			const result = await Catalogs.artifactTypes();
			expect(result.length).toBeGreaterThanOrEqual(6);
		});

		it('enchantment types', async () => {
			const result = await Catalogs.enchantmentTypes();
			expect(result.length).toBeGreaterThanOrEqual(5);
		});

		it('spell types', async () => {
			const result = await Catalogs.spellTypes();
			expect(result.length).toBeGreaterThanOrEqual(2);
		});

		it('powers', async () => {
			const result = await Catalogs.powers();
			expect(result.length).toBeGreaterThanOrEqual(33);
		});

		it('toughnesses', async () => {
			const result = await Catalogs.toughnesses();
			expect(result.length).toBeGreaterThanOrEqual(35);
		});

		it('loyalties', async () => {
			const result = await Catalogs.loyalties();
			expect(result.length).toBeGreaterThanOrEqual(9);
		});

		it('watermarks', async () => {
			const result = await Catalogs.watermarks();
			expect(result.length).toBeGreaterThanOrEqual(50);
		});
	});
});
