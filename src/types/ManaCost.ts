import { Color } from './Color';

export interface ManaCost {
	cost: string;
	cmc: number;
	colors: Color[];
	colorless: boolean;
	monocolored: boolean;
	multicolored: boolean;
}
