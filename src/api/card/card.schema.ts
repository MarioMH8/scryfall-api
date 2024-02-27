import type { CardCore } from './card-core.schema';
import type { GameplayCard } from './card-gameplay.schema';
import type { CardPrint } from './card-print.schema';

export type Card = CardCore & GameplayCard & CardPrint;
