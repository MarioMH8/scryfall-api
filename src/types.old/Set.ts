import type { SetType } from './SetType';

export interface Set {
	block?: string;
	block_code?: string;
	card_count: number;
	code: string;
	digital: boolean;
	foil_only: boolean;
	icon_svg_uri: string;
	id: string;
	mtgo_code?: string;
	name: string;
	parent_set_code?: string;
	released_at?: string;
	scryfall_uri: string;
	search_uri: string;
	set_type: keyof typeof SetType;
	tcgplayer_id?: number;
	uri: string;
}
