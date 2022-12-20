import { describe, expect, it } from 'vitest';

import Sets from '../src/api/Sets';

describe('Scryfall', function () {
	describe('Sets', function () {
		it('by code', async () => {
			const set = await Sets.byCode('hou');
			expect(set?.name).toBe('Hour of Devastation');
		});

		it('by id', async () => {
			const set = await Sets.byId('65ff168b-bb94-47a5-a8f9-4ec6c213e768');
			expect(set?.name).toBe('Hour of Devastation');
		});

		it('by tgc player id', async () => {
			const set = await Sets.byTcgPlayerId(1934);
			expect(set?.name).toBe('Hour of Devastation');
		});

		it('all', async () => {
			const sets = await Sets.all();
			expect(sets.length).toBeGreaterThanOrEqual(394);
		});
	});
});
