import type { Color } from './Color';

export interface CardSymbol {
	appears_in_mana_costs: boolean;
	colors: Color[];
	converted_mana_cost?: number;
	english: string;
	funny: boolean;
	gatherer_alternates?: string[];
	loose_variant?: string;
	represents_mana: boolean;
	symbol: string;
	transposable: boolean;
}
