import type { Nullable } from '../../types';

type SetType =
	| 'core'
	| 'expansion'
	| 'masters'
	| 'alchemy'
	| 'masterpiece'
	| 'arsenal'
	| 'from_the_vault'
	| 'spellbook'
	| 'premium_deck'
	| 'duel_deck'
	| 'draft_innovation'
	| 'treasure_chest'
	| 'commander'
	| 'planechase'
	| 'archenemy'
	| 'vanguard'
	| 'funny'
	| 'starter'
	| 'box'
	| 'promo'
	| 'token'
	| 'memorabilia'
	| 'minigame';

interface Set {
	arena_code: Nullable<string>;
	block: Nullable<string>;
	block_code: Nullable<string>;
	card_count: number;
	code: string;
	digital: boolean;
	foil_only: boolean;
	icon_svg_uri: string;
	id: string;
	mtgo_code: Nullable<string>;
	name: string;
	nonfoil_only: boolean;
	object: 'set';
	parent_set_code: Nullable<string>;
	printed_size: Nullable<number>;
	released_at: Nullable<Date>;
	scryfall_uri: string;
	search_uri: string;
	set_type: SetType;
	tcgplayer_id: Nullable<number>;
	uri: string;
}

export type { Set, SetType };
