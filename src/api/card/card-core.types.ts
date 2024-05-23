import type { Nullable } from '../../types';

type CardLanguage =
	| 'ar'
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'grc'
	| 'he'
	| 'it'
	| 'ja'
	| 'ko'
	| 'la'
	| 'ph'
	| 'pt'
	| 'ru'
	| 'sa'
	| 'zhs'
	| 'zht';

type CardLayout =
	| 'adventure'
	| 'art_series'
	| 'augment'
	| 'battle'
	| 'case'
	| 'class'
	| 'double_faced_token'
	| 'emblem'
	| 'flip'
	| 'host'
	| 'leveler'
	| 'meld'
	| 'modal_dfc'
	| 'mutate'
	| 'normal'
	| 'planar'
	| 'prototype'
	| 'reversible_card'
	| 'saga'
	| 'scheme'
	| 'split'
	| 'token'
	| 'transform'
	| 'vanguard';

interface CardCore {
	arena_id?: Nullable<string>;
	cardmarket_id?: Nullable<number>;
	id: string;
	lang: CardLanguage;
	layout: CardLayout;
	mtgo_foil_id?: Nullable<number>;
	mtgo_id?: Nullable<number>;
	multiverse_ids?: Nullable<number[]>;
	object: 'card';
	oracle_id?: Nullable<string>;
	prints_search_uri: string;
	rulings_uri: string;
	scryfall_uri: string;
	tcgplayer_etched_id?: Nullable<number>;
	tcgplayer_id?: Nullable<number>;
	uri: string;
}

export type { CardCore, CardLanguage, CardLayout };
