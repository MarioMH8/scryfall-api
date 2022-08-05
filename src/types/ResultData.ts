export interface ResultData<T, NOT_FOUND = never> {
	data: T[];
	not_found?: NOT_FOUND[];
}
