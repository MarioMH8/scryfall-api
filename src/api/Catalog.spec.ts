import { expect, describe, it } from 'vitest';
import Catalog from './Catalog';

describe('Scryfall', function () {
	describe('Catalog', function () {
		it('card names', async () => {
			const result = await Catalog.cardNames();
			expect(result.length).toBeGreaterThanOrEqual(18059);
		});

		it('artist names', async () => {
			const result = await Catalog.artistNames();
			expect(result.length).toBeGreaterThanOrEqual(676);
		});

		it('word bank', async () => {
			const result = await Catalog.wordBank();
			expect(result.length).toBeGreaterThanOrEqual(12892);
		});

		it('creature types', async () => {
			const result = await Catalog.creatureTypes();
			expect(result.length).toBeGreaterThanOrEqual(242);
		});

		it('planeswalker types', async () => {
			const result = await Catalog.planeswalkerTypes();
			expect(result.length).toBeGreaterThanOrEqual(42);
		});

		it('land types', async () => {
			const result = await Catalog.landTypes();
			expect(result.length).toBeGreaterThanOrEqual(13);
		});

		it('artifact types', async () => {
			const result = await Catalog.artifactTypes();
			expect(result.length).toBeGreaterThanOrEqual(6);
		});

		it('enchantment types', async () => {
			const result = await Catalog.enchantmentTypes();
			expect(result.length).toBeGreaterThanOrEqual(5);
		});

		it('spell types', async () => {
			const result = await Catalog.spellTypes();
			expect(result.length).toBeGreaterThanOrEqual(2);
		});

		it('powers', async () => {
			const result = await Catalog.powers();
			expect(result.length).toBeGreaterThanOrEqual(33);
		});

		it('toughnesses', async () => {
			const result = await Catalog.toughnesses();
			expect(result.length).toBeGreaterThanOrEqual(35);
		});

		it('loyalties', async () => {
			const result = await Catalog.loyalties();
			expect(result.length).toBeGreaterThanOrEqual(9);
		});

		it('watermarks', async () => {
			const result = await Catalog.watermarks();
			expect(result.length).toBeGreaterThanOrEqual(50);
		});
	});
});
