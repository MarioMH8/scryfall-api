import type { infer as inferType } from 'zod';

import { Color } from '../schemas';

export type Color = inferType<typeof Color>;
