import type { Border } from './Border';
import type { CardFace } from './CardFace';
import type { Color } from './Color';
import type { FrameEffect } from './FrameEffect';
import type { Game } from './Game';
import type { ImageUris } from './ImageUris';
import type { Layout } from './Layout';
import type { Legalities } from './Legalties';
import type { Preview } from './Preview';
import type { Prices } from './Prices';
import type { PromoType } from './PromoType';
import type { PurchaseUris } from './PurchaseUris';
import type { Rarity } from './Rarity';
import type { RelatedCard } from './RelatedCard';
import type { RelatedUris } from './RelatedUris';
import type { Set as ScryfallSet } from './Set';

export interface Card {
	object: 'card';

	// core fields
	arena_id?: number;
	id: string;
	lang: string;
	mtgo_id?: number;
	mtgo_foil_id?: number;
	multiverse_ids?: number[];
	tcgplayer_id?: number;
	oracle_id: string;
	prints_search_uri: string;
	rulings_uri: string;
	scryfall_uri: string;
	uri: string;

	// gameplay fields
	all_parts?: RelatedCard[];
	card_faces?: CardFace[];
	cmc: number;
	colors?: Color[];
	color_identity: Color[];
	color_indicator?: Color[];
	edhrec_rank?: number;
	foil: boolean;
	hand_modifier?: string;
	layout: keyof typeof Layout;
	legalities: Legalities;
	life_modifier?: string;
	loyalty?: string;
	mana_cost?: string;
	name: string;
	nonfoil: boolean;
	oracle_text?: string;
	oversized: boolean;
	power?: string;
	reserved: boolean;
	toughness?: string;
	type_line: string;

	// print fields
	artist?: string;
	artist_ids?: string[];
	booster: boolean;
	border_color: keyof typeof Border;
	card_back_id: string;
	collector_number: string;
	digital: boolean;
	flavor_text?: string;
	frame_effects?: (keyof typeof FrameEffect)[];
	frame: '1993' | '1997' | '2003' | '2015' | 'Future';
	full_art: boolean;
	games: (keyof typeof Game)[];
	highres_image: boolean;
	illustration_id?: string;
	image_uris?: ImageUris;
	prices: Prices;
	printed_name?: string;
	printed_text?: string;
	printed_type_line?: string;
	promo: boolean;
	promo_types?: (keyof typeof PromoType)[];
	purchase_uris: PurchaseUris;
	rarity: keyof typeof Rarity;
	related_uris: RelatedUris;
	released_at: string;
	reprint: boolean;
	scryfall_set_uri: string;
	set_name: string;
	set_search_uri: string;
	set_type: ScryfallSet['set_type'];
	set_uri: string;
	set: string;
	story_spotlight: boolean;
	textless: boolean;
	variation: boolean;
	variation_of?: string;
	watermark?: string;
	preview?: Preview;
}
