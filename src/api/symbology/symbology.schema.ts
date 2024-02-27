import type { Nullable } from '../../types';

type Color = 'W' | 'B' | 'R' | 'U' | 'G';

interface ManaCost {
	cmc: number;
	colorless: boolean;
	colors: Color[];
	cost: string;
	monocolored: boolean;
	multicolored: boolean;
	object: 'mana_cost';
}

interface Symbology {
	appears_in_mana_costs: boolean;
	colors: Color[];
	english: string;
	funny: boolean;
	gatherer_alternates: Nullable<string[]>;
	hybrid: boolean;
	loose_variant: Nullable<string>;
	mana_value: Nullable<number>;
	object: 'card_symbol';
	phyrexian: boolean;
	represents_mana: boolean;
	svg_uri: Nullable<string>;
	symbol: string;
	transposable: boolean;
}

export type { Color, ManaCost, Symbology };
