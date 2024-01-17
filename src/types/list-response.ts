import type { infer as inferType } from 'zod';

import { BaseSchema } from '../schemas';

export type ListResponse<T> = inferType<typeof BaseSchema> & { data: T[] };
