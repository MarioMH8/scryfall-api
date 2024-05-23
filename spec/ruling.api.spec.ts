import { describe, expect, it } from 'bun:test';

import { Rulings } from '../src';

describe('scryfall-sdk', () => {
	describe('Rulings', () => {
		it('by id', async () => {
			const rulings = await Rulings.byId('9ea8179a-d3c9-4cdc-a5b5-68cc73279050');
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by set', async () => {
			const rulings = await Rulings.bySet('dgm', '22');
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by multiverse id', async () => {
			const rulings = await Rulings.byMultiverseId(369_030);
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by mtgo id', async () => {
			const rulings = await Rulings.byMtgoId(48_338);
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by arena id', async () => {
			const rulings = await Rulings.byArenaId(67_204);
			expect(rulings.length).toBeGreaterThanOrEqual(3);
		});
	});
});
