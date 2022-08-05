export interface SearchError {
	object: 'error';
	code: string;
	status: number;
	details: string;
	warnings?: string[];
}
