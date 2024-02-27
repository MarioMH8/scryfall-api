import type { CardCore } from './card-core.types';
import type { GameplayCard } from './card-gameplay.types';
import type { CardPrint } from './card-print.types';

export type Card = CardCore & GameplayCard & CardPrint;
