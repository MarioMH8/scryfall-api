import type { BulkDataType } from './BulkDataType';

export interface BulkDataDefinition {
	content_encoding: string;
	content_type: string;
	description: string;
	download_uri: string;
	id: string;
	name: string;
	object: 'bulk_data';
	size: number;
	type: BulkDataType;
	updated_at: string;
	uri: string;
}
