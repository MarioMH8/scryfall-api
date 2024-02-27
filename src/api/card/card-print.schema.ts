import type { Nullable } from '../../types';
import type { SetType } from '../set';

type BorderColor = 'black' | 'borderless' | 'gold' | 'silver' | 'white';

type Finish = 'foil' | 'nonfoil' | 'etched';

type Frame = '1993' | '1997' | '2003' | '2015' | 'future';

type FrameEffect =
	| 'legendary'
	| 'miracle'
	| 'nyxtouched'
	| 'draft'
	| 'devoid'
	| 'tombstone'
	| 'colorshifted'
	| 'inverted'
	| 'sunmoondfc'
	| 'compasslanddfc'
	| 'originpwdfc'
	| 'mooneldrazidfc'
	| 'waxingandwaningmoondfc'
	| 'showcase'
	| 'extendedart'
	| 'companion'
	| 'etched'
	| 'snow'
	| 'lesson'
	| 'shatteredglass'
	| 'convertdfc'
	| 'fandfc'
	| 'upsidedowndfc';

type Game = 'paper' | 'arena' | 'mtgo';

type ImageStatus = 'missing' | 'placeholder' | 'lowres' | 'highres_scan';

interface ImageUris {
	art_crop: string;
	border_crop: string;
	large: string;
	normal: string;
	png: string;
	small: string;
}

interface Preview {
	previewed_at: Date;
	source: string;
	source_uri: string;
}

interface Prices {
	eur?: Nullable<string>;
	eur_foil?: Nullable<string>;
	tix?: Nullable<string>;
	usd?: Nullable<string>;
	usd_etched?: Nullable<string>;
	usd_foil?: Nullable<string>;
}

type PromoType =
	| 'ourney'
	| 'prerelease'
	| 'datestamped'
	| 'planeswalkerdeck'
	| 'buyabox'
	| 'judgegift'
	| 'event'
	| 'convention'
	| 'starterdeck'
	| 'instore'
	| 'setpromo'
	| 'fnm'
	| 'openhouse'
	| 'league'
	| 'draftweekend'
	| 'gameday'
	| 'release'
	| 'intropack'
	| 'giftbox'
	| 'duels'
	| 'wizardsplaynetwork'
	| 'premiereshop'
	| 'playerrewards'
	| 'gateway'
	| 'arenaleague';

interface PurchaseUris {
	[key: string]: Nullable<string>;
	cardhoarder?: Nullable<string>;
	cardmarket?: Nullable<string>;
	tcgplayer?: Nullable<string>;
}

type Rarity = 'common' | 'uncommon' | 'rare' | 'special' | 'mythic' | 'bonus';

interface RelatedUris {
	[key: string]: Nullable<string>;
	edhrec?: Nullable<string>;
	gatherer?: Nullable<string>;
	mtgtop8?: Nullable<string>;
	tcgplayer_decks?: Nullable<string>;
	tcgplayer_infinite_articles?: Nullable<string>;
	tcgplayer_infinite_decks?: Nullable<string>;
}

type SecurityStamp = 'oval' | 'triangle' | 'acorn' | 'circle' | 'arena' | 'heart';

interface CardPrint {
	artist: Nullable<string>;
	artist_ids: Nullable<string[]>;
	attraction_lights: Nullable<number[]>;
	booster: boolean;
	border_color: BorderColor;
	card_back_id: string;
	collector_number: string;
	content_warning: Nullable<boolean>;
	digital: boolean;
	finishes: Finish[];
	flavor_name: Nullable<string>;
	flavor_text: Nullable<string>;
	frame: Frame;
	frame_effects: Nullable<FrameEffect[]>;
	full_art: boolean;
	games: Game[];
	highres_image: boolean;
	illustration_id: Nullable<string>;
	image_status: ImageStatus;
	image_uris: Nullable<ImageUris>;
	oversized: boolean;
	preview: Preview;
	prices: Prices;
	printed_name: Nullable<string>;
	printed_text: Nullable<string>;
	printed_type_line: Nullable<string>;
	promo: boolean;
	promo_types: Nullable<PromoType[]>;
	purchase_uris: Nullable<PurchaseUris>;
	rarity: Rarity;
	related_uris: RelatedUris;
	released_at: Date;
	reprint: boolean;
	scryfall_set_uri: string;
	security_stamp: Nullable<SecurityStamp>;
	set: string;
	set_id: string;
	set_name: string;
	set_search_uri: string;
	set_type: SetType;
	set_uri: string;
	story_spotlight: boolean;
	textless: boolean;
	variation: boolean;
	variation_of: Nullable<string>;
	watermark: Nullable<string>;
}

export type {
	BorderColor,
	CardPrint,
	Finish,
	Frame,
	FrameEffect,
	Game,
	ImageStatus,
	ImageUris,
	Preview,
	Prices,
	PromoType,
	PurchaseUris,
	Rarity,
	RelatedUris,
	SecurityStamp,
};
