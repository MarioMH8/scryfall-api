type CardSearchUnique = 'art' | 'cards' | 'prints';

type CardSearchOrder =
	| 'artist'
	| 'cmc'
	| 'color'
	| 'edhrec'
	| 'eur'
	| 'name'
	| 'penny'
	| 'power'
	| 'rarity'
	| 'released'
	| 'review'
	| 'set'
	| 'tix'
	| 'toughness'
	| 'usd';

type CardSearchDirection = 'asc' | 'auto' | 'desc';

type CardSearchFormat = 'csv' | 'json';

interface CardSearch {
	dir?: CardSearchDirection;
	format?: CardSearchFormat;
	include_extras?: boolean;
	include_multilingual?: boolean;
	include_variations?: boolean;
	order?: CardSearchOrder;
	page?: number;
	pretty?: boolean;
	unique?: CardSearchUnique;
}

export type { CardSearch, CardSearchDirection, CardSearchFormat, CardSearchOrder, CardSearchUnique };
