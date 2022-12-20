import type { SetType } from './SetType';

export interface Set {
	id: string;
	code: string;
	mtgo_code?: string;
	tcgplayer_id?: number;
	name: string;
	set_type: keyof typeof SetType;
	released_at?: string;
	block_code?: string;
	block?: string;
	parent_set_code?: string;
	card_count: number;
	digital: boolean;
	foil_only: boolean;
	scryfall_uri: string;
	uri: string;
	icon_svg_uri: string;
	search_uri: string;
}
