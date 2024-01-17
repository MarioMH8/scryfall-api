import { literal, object } from 'zod';

const CardSymbol = object({
	object: literal('set'),
});

export default CardSymbol;
