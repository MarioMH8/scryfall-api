export default class ScryfallError extends Error {
	constructor(
		readonly code: string,
		details: string,
		readonly status: number,
		readonly type?: null | string | undefined,
		readonly warnings?: null | string[] | undefined
	) {
		super(details);
	}
}
