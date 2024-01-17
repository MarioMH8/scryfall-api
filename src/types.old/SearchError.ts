export interface SearchError {
	code: string;
	details: string;
	object: 'error';
	status: number;
	warnings?: string[];
}
