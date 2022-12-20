import type { Color } from './Color';

export interface CardSymbol {
	symbol: string;
	loose_variant?: string;
	english: string;
	transposable: boolean;
	represents_mana: boolean;
	converted_mana_cost?: number;
	colors: Color[];
	appears_in_mana_costs: boolean;
	funny: boolean;
	gatherer_alternates?: string[];
}
