import type { Color } from './Color';
import type { ImageUris } from './ImageUris';

export interface CardFace {
	artist?: string | null;
	artist_id?: string | null;
	cmc?: number | null;
	color_indicator?: Color[] | null;
	colors?: Color[] | null;
	defense?: string | null;
	flavor_text?: string | null;
	illustration_id?: string | null;
	image_uris?: ImageUris | null;
	layout?: string | null;
	loyalty?: string | null;
	mana_cost?: string | null;
	name: string;
	object: 'card_face';
	oracle_id?: string | null;
	oracle_text?: string | null;
	power?: string | null;
	printed_name?: string | null;
	printed_text?: string | null;
	printed_type_line?: string | null;
	toughness?: string | null;
	type_line?: string | null;
	watermark?: string | null;
}
