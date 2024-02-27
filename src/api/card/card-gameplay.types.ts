import type { Nullable } from '../../types';
import type { Color } from '../symbology';

type CardComponent = 'token' | 'meld_part' | 'meld_result' | 'combo_piece';

type Legality = 'legal' | 'not_legal' | 'restricted' | 'banned';

interface ImageUris {
	art_crop: string;
	border_crop: string;
	large: string;
	normal: string;
	png: string;
	small: string;
}

interface CardFace {
	artist?: Nullable<string>;
	artist_id?: Nullable<string>;
	cmc?: Nullable<number>;
	color_indicator?: Nullable<Color[]>;
	colors?: Nullable<Color[]>;
	defense?: Nullable<string>;
	flavor_text?: Nullable<string>;
	illustration_id?: Nullable<string>;
	image_uris?: Nullable<ImageUris>;
	layout?: Nullable<string>;
	loyalty?: Nullable<string>;
	mana_cost: string;
	name: string;
	object: 'card_face';
	oracle_id?: Nullable<string>;
	oracle_text?: Nullable<string>;
	power?: Nullable<string>;
	printed_name?: Nullable<string>;
	printed_text?: Nullable<string>;
	printed_type_line?: Nullable<string>;
	toughness?: Nullable<string>;
	type_line?: Nullable<string>;
	watermark?: Nullable<string>;
}

interface RelatedCard {
	component: CardComponent;
	id: string;
	name: string;
	object: 'related_card';
	type_line: string;
	uri: string;
}

interface Legalities {
	alchemy: Legality;
	brawl: Legality;
	commander: Legality;
	duel: Legality;
	explorer: Legality;
	future: Legality;
	gladiator: Legality;
	historic: Legality;
	legacy: Legality;
	modern: Legality;
	oathbreaker: Legality;
	oldschool: Legality;
	pauper: Legality;
	paupercommander: Legality;
	penny: Legality;
	pioneer: Legality;
	predh: Legality;
	premodern: Legality;
	standard: Legality;
	standardbrawl: Legality;
	timeless: Legality;
	vintage: Legality;
}

interface GameplayCard {
	all_parts?: Nullable<RelatedCard[]>;
	card_faces?: Nullable<CardFace[]>;
	cmc: number;
	color_identity: Color[];
	color_indicator?: Nullable<Color[]>;
	colors?: Nullable<Color[]>;
	defense?: Nullable<string>;
	edhrec_rank?: Nullable<number>;
	hand_modifier?: Nullable<string>;
	keywords: string[];
	legalities: Legalities;
	life_modifier?: Nullable<string>;
	loyalty?: Nullable<string>;
	mana_cost?: Nullable<string>;
	name: string;
	oracle_text?: Nullable<string>;
	penny_rank?: Nullable<number>;
	power?: Nullable<string>;
	produced_mana?: Nullable<Color[]>;
	reserved: boolean;
	toughness?: Nullable<string>;
	type_line: string;
}

export type { CardComponent, CardFace, GameplayCard, ImageUris, Legalities, Legality, RelatedCard };
