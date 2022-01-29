import Misc from './Misc';

describe('Scryfall', function () {
	describe('Misc', () => {
		it('homepage links', async () => {
			const result = await Misc.homepageLinks();
			expect(result.length).toBeGreaterThanOrEqual(1);
		});
	});
});
