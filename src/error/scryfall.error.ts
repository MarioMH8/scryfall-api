export default class ScryfallError extends Error {
	constructor(
		readonly code: string,
		details: string,
		readonly status: number,
		readonly type?: string | undefined | null,
		readonly warnings?: string[] | undefined | null
	) {
		super(details);
	}
}
