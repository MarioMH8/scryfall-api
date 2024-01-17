import type { infer as inferType } from 'zod';

import { ManaCost } from '../schemas';

export type ManaCost = inferType<typeof ManaCost>;
