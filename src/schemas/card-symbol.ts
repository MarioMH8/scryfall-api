import { array, boolean, literal, number, object, string } from 'zod';

import Color from './color';

const CardSymbol = object({
	object: literal('card_symbol'),
	symbol: string(),
	loose_variant: string().nullish(),
	english: string(),
	transposable: boolean(),
	represents_mana: boolean(),
	mana_value: number().nullish(),
	appears_in_mana_costs: boolean(),
	funny: boolean(),
	colors: array(Color),
	hybrid: boolean(),
	phyrexian: boolean(),
	gatherer_alternates: array(string()).nullish(),
	svg_uri: string().nullish(),
});

export default CardSymbol;
