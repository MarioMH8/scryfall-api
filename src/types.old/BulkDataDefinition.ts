import type { BulkDataType } from './BulkDataType';

export interface BulkDataDefinition {
	compressed_size: number;
	content_encoding: string;
	content_type: string;
	description: string;
	download_uri: string;
	id: string;
	name: string;
	object: 'bulk_data';
	type: BulkDataType;
	updated_at: string;
	uri: string;
}
