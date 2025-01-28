import type { CardCore } from './card-core.types';
import type { GameplayCard } from './card-gameplay.types';
import type { CardPrint } from './card-print.types';

type Card = CardCore & CardPrint & GameplayCard;

export type { Card };

export type { CardLanguage, CardLayout } from './card-core.types';
export type { CardComponent, CardFace, Legalities, Legality, RelatedCard } from './card-gameplay.types';
export type { ImageUris } from './card-image-uris.types';
export type {
	BorderColor,
	Finish,
	Frame,
	FrameEffect,
	Game,
	ImageStatus,
	Preview,
	Prices,
	PromoType,
	PurchaseUris,
	Rarity,
	RelatedUris,
	SecurityStamp,
} from './card-print.types';
