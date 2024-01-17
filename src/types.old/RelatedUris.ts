export interface RelatedUris {
	edhrec?: string | null;
	gatherer?: string | null;
	mtgtop8?: string | null;
	tcgplayer_decks?: string | null;
	tcgplayer_infinite_articles?: string | null;
	tcgplayer_infinite_decks?: string | null;

	[key: string]: string | null | undefined;
}
