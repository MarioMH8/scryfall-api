import { ZodType } from 'zod';

import type { Fetcher } from './fetcher';

/**
 * A type utility which represents the function returned
 * from createZodFetcher
 */
export type ZodFetcher<TFetcher extends Fetcher> = <TData>(
	schema: ZodType<TData>,
	...args: Parameters<TFetcher>
) => Promise<TData>;

/**
 * Creates a `fetchWithZod` function that takes in a schema of
 * the expected response, and the arguments to fetch.
 *
 * Since you didn't provide a fetcher in `createZodFetcher()`,
 * we're falling back to the default fetcher.
 *
 * @example
 *
 * const fetchWithZod = createZodFetcher();
 *
 * const response = await fetchWithZod(
 *   z.object({
 *     hello: z.string(),
 *   }),
 *   "https://example.com",
 * );
 */
export default function createZodFetcher(): ZodFetcher<typeof fetch>;

/**
 * Creates a `fetchWithZod` function that takes in a schema of
 * the expected response, and the arguments to the fetcher
 * you provided.
 *
 * @example
 *
 * const fetchWithZod = createZodFetcher((url) => {
 *   return fetch(url).then((res) => res.json());
 * });
 *
 * const response = await fetchWithZod(
 *   z.object({
 *     hello: z.string(),
 *   }),
 *   "https://example.com",
 * );
 */
export default function createZodFetcher<TFetcher extends Fetcher>(
	/**
	 * A fetcher function that returns the data you'd like to parse
	 * with the schema.
	 */
	fetcher: TFetcher
): ZodFetcher<TFetcher>;
export default function createZodFetcher<TFetcher extends Fetcher>(
	fetcher: TFetcher = fetch as TFetcher
): ZodFetcher<TFetcher> {
	return async (schema, ...args) => {
		// @ts-expect-error Unknown spread argument
		const response = await fetcher(...args);
		const object = await response.json();

		return schema.parse(object);
	};
}
