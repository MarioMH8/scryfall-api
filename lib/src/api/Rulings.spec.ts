import Rulings from './Rulings';

describe('Scryfall', function () {
	describe('Rulings', function () {
		it('by id', async () => {
			const rulings = await Rulings.byId('9ea8179a-d3c9-4cdc-a5b5-68cc73279050');
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by set', async () => {
			const rulings = await Rulings.bySet('dgm', '22');
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by multiverse id', async () => {
			const rulings = await Rulings.byMultiverseId(369030);
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by mtgo id', async () => {
			const rulings = await Rulings.byMtgoId(48338);
			expect(rulings.length).toBeGreaterThanOrEqual(2);
		});

		it('by arena id', async () => {
			const rulings = await Rulings.byArenaId(67204);
			expect(rulings.length).toBeGreaterThanOrEqual(3);
		});
	});
});
