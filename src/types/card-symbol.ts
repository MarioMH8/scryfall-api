import type { infer as inferType } from 'zod';

import { CardSymbol } from '../schemas';

export type CardSymbol = inferType<typeof CardSymbol>;
