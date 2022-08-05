import { RelatedCardComponent } from './RelatedCardComponent';

export interface RelatedCard {
	component: keyof typeof RelatedCardComponent;
	id: string;
	name: string;
	object: 'related_card';
	type_line: string;
	uri: string;
}
