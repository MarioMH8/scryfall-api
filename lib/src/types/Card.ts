import { Border } from './Border';
import { CardFace } from './CardFace';
import { Color } from './Color';
import { FrameEffect } from './FrameEffect';
import { Game } from './Game';
import { ImageUris } from './ImageUris';
import { Layout } from './Layout';
import { Legalities } from './Legalties';
import { Preview } from './Preview';
import { Prices } from './Prices';
import { PromoType } from './PromoType';
import { PurchaseUris } from './PurchaseUris';
import { Rarity } from './Rarity';
import { RelatedCard } from './RelatedCard';
import { RelatedUris } from './RelatedUris';
import { Set as ScryfallSet } from './Set';

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
