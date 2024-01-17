import { array, boolean, number, object, string } from 'zod';
import type { ZodTypeAny } from 'zod/lib/types';

const base = {
	has_more: boolean(),
	next_page: string().nullish(),
	total_cards: number().nullish(),
	warnings: array(string()).nullish(),
} as const;

const BaseSchema = object(base);

const ListResponse = <T extends ZodTypeAny>(schema: T) =>
	object({
		...base,
		data: array(schema),
	});

export { BaseSchema };

export default ListResponse;
