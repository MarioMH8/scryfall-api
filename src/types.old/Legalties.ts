import type { Format } from './Format';
import type { Legality } from './Legalty';

export type Legalities = {
	[key in keyof typeof Format]: keyof typeof Legality;
};
