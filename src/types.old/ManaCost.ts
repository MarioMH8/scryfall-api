import type { Color } from './Color';

export interface ManaCost {
	cmc: number;
	colorless: boolean;
	colors: Color[];
	cost: string;
	monocolored: boolean;
	multicolored: boolean;
	object: 'mana_cost';
}
