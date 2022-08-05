import { Format } from './Format';
import { Legality } from './Legalty';

export type Legalities = {
	[key in keyof typeof Format]: keyof typeof Legality;
};
