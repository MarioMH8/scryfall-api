import type { Color } from './Color';

export interface CardSymbol {
	appears_in_mana_costs: boolean;
	colors: Color[];
	english: string;
	funny: boolean;
	gatherer_alternates?: string[] | null;
	loose_variant?: string | null;
	mana_value?: number | null;
	object: 'card_symbol';
	represents_mana: boolean;
	svg_uri?: string | null;
	symbol: string;
	transposable: boolean;
}
