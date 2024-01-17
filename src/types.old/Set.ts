import type { SetType } from './SetType';

export interface Set {
	arena_code?: string | null;
	block?: string | null;
	block_code?: string | null;
	card_count: number;
	code: string;
	digital: boolean;
	foil_only: boolean;
	icon_svg_uri: string;
	id: string;
	mtgo_code?: string | null;
	name: string;
	nonfoil_only: boolean;
	object: 'set';
	parent_set_code?: string | null;
	printed_size?: number | null;
	released_at?: string | null;
	scryfall_uri: string;
	search_uri: string;
	set_type: keyof typeof SetType;
	tcgplayer_id?: number | null;
	uri: string;
}
