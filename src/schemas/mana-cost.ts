import { array, boolean, literal, number, object, string } from 'zod';

import Color from './color';

const ManaCost = object({
	object: literal('mana_cost'),
	cost: string(),
	cmc: number(),
	colors: array(Color),
	colorless: boolean(),
	monocolored: boolean(),
	multicolored: boolean(),
});

export default ManaCost;
