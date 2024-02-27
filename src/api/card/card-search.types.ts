type CardSearchUnique = 'cards' | 'art' | 'prints';

type CardSearchOrder =
	| 'name'
	| 'set'
	| 'released'
	| 'rarity'
	| 'color'
	| 'usd'
	| 'tix'
	| 'eur'
	| 'cmc'
	| 'power'
	| 'toughness'
	| 'edhrec'
	| 'penny'
	| 'artist'
	| 'review';

type CardSearchDir = 'auto' | 'asc' | 'desc';

type CardSearchFormat = 'json' | 'csv';

interface CardSearch {
	dir?: CardSearchDir;
	format?: CardSearchFormat;
	include_extras?: boolean;
	include_multilingual?: boolean;
	include_variations?: boolean;
	order?: CardSearchOrder;
	page?: number;
	pretty?: boolean;
	unique?: CardSearchUnique;
}

export type { CardSearch, CardSearchDir, CardSearchFormat, CardSearchOrder, CardSearchUnique };
