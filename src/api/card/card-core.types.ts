import type { Nullable } from '../../types';

type CardLanguage =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'it'
	| 'pt'
	| 'ja'
	| 'ko'
	| 'ru'
	| 'zhs'
	| 'zht'
	| 'he'
	| 'la'
	| 'grc'
	| 'ar'
	| 'sa'
	| 'ph';

type CardLayout =
	| 'normal'
	| 'split'
	| 'flip'
	| 'transform'
	| 'modal_dfc'
	| 'meld'
	| 'leveler'
	| 'class'
	| 'case'
	| 'saga'
	| 'adventure'
	| 'mutate'
	| 'prototype'
	| 'battle'
	| 'planar'
	| 'scheme'
	| 'vanguard'
	| 'token'
	| 'double_faced_token'
	| 'emblem'
	| 'augment'
	| 'host'
	| 'art_series'
	| 'reversible_card';

interface CardCore {
	arena_id: Nullable<string>;
	cardmarket_id: Nullable<number>;
	id: string;
	lang: CardLanguage;
	layout: CardLayout;
	mtgo_foil_id: Nullable<number>;
	mtgo_id: Nullable<number>;
	multiverse_ids: Nullable<number[]>;
	object: 'card';
	oracle_id: Nullable<string>;
	prints_search_uri: string;
	rulings_uri: string;
	scryfall_uri: string;
	tcgplayer_etched_id: Nullable<number>;
	tcgplayer_id: Nullable<number>;
	uri: string;
}

export type { CardCore, CardLanguage, CardLayout };
