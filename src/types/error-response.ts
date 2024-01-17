import type { infer as inferType } from 'zod';

import { ErrorResponse } from '../schemas';

export type ErrorResponse = inferType<typeof ErrorResponse>;
