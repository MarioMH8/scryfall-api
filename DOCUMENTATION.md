# Table of Contents

> [!NOTE]
> As of [Feb 26th, 2024](./CHANGELOG.md), almost all features described in
the [Scryfall documentation](https://scryfall.com/docs/api) are supported. If you see something that isn't supported,
make an issue! See [support readme](./SUPPORT.md).


- [Cards](#cards)
    - [`Cards.autoCompleteName(name: string): Promise<string[]>;` ](#cardsautocompletenamename-string-promisestring-)
    - [`Cards.byArenaId(id: number): Promise<Card | undefined>;` ](#cardsbyarenaidid-number-promisecard--undefined-)
    - [`Cards.byId(id: string): Promise<Card | undefined>;`](#cardsbyidid-string-promisecard--undefined-)
    - [`Cards.byMtgoId(id: number): Promise<Card | undefined>;` ](#cardsbymtgoidid-number-promisecard--undefined-)
    - [`Cards.byMultiverseId(id: number): Promise<Card | undefined>;` ](#cardsbymultiverseidid-number-promisecard--undefined-)
    - [`Cards.byName(name: string, fuzzy = false): Promise<Card | undefined>;`](#cardsbynamename-string-set-string-fuzzy--false-promisecard--undefined-)
    - [`Cards.byName(name: string, set?: string, fuzzy = false): Promise<Card | undefined>;`](#cardsbynamename-string-set-string-fuzzy--false-promisecard--undefined-)
    - [`Cards.bySet(code: string, collectorId: number, lang?: string): Promise<Card | undefined>;`](#cardsbysetsetcode-string-collectornumber-number-lang-string-promisecard--undefined-)
    - [`Cards.byTcgPlayerId(id: number): Promise<Card | undefined>;` ](#cardsbytcgplayeridid-number-promisecard--undefined-)
    - [`Cards.collection(...collection: CardIdentifier[]): Promise<Card[]>;`](#cardscollectioncollection-cardidentifier-promisecard-)
    - [`Cards.random(id: number): Promise<Card | undefined>;` ](#cardsrandomid-number-promisecard--undefined-)
    - [`Cards.search(query: string, options?: SearchOptions | number): MagicPageResult<Card, Cards>;` ](#cardssearchquery-string-options-searchoptions--number-magicpageresultcard-cards-)
- [Sets](#sets-)
    - [`Sets.all(): Promise<Set[]>;` ](#setsall-promiseset-)
    - [`Sets.byCode(code: string): Promise<Set>;` ](#setsbycodecode-string-promiseset-)
    - [`Sets.byId(id: string): Promise<Set>;` ](#setsbyidid-string-promiseset-)
    - [`Sets.byTcgPlayerId(id: number): Promise<Set>;` ](#setsbytcgplayeridid-number-promiseset-)
- [Rulings](#rulings-)
    - [`Rulings.byArenaId(id: number): Promise<Ruling[]>;` ](#rulingsbyarenaidid-number-promiseruling-)
    - [`Rulings.byId(id: string): Promise<Ruling[]>;` ](#rulingsbyidid-string-promiseruling-)
    - [`Rulings.byMtgoId(id: number): Promise<Ruling[]>;` ](#rulingsbymtgoidid-number-promiseruling-)
    - [`Rulings.byMultiverseId(id: number): Promise<Ruling[]>;` ](#rulingsbymultiverseidid-number-promiseruling-)
    - [`Rulings.bySet(code: string, collectorId: string | number): Promise<Ruling[]>;` ](#rulingsbysetcode-string-collectorid-string--number-promiseruling-)
- [Symbology](#symbology-)
    - [`Symbology.all(): Promise<CardSymbol[]>;`](#symbologyall-promisecardsymbol-)
    - [`Symbology.parseMana(mana: string): Promise<ManaCost>;` ](#symbologyparsemanamana-string-promisemanacost-)
- [Catalogs](#catalogs-)
    - [`Catalog.artifactTypes(): Promise<string[]>;` ](#catalogartifacttypes-promisestring-)
    - [`Catalog.artistNames(): Promise<string[]>;` ](#catalogartistnames-promisestring-)
    - [`Catalog.cardNames(): Promise<string[]>;` ](#catalogcardnames-promisestring-)
    - [`Catalog.creatureTypes(): Promise<string[]>;` ](#catalogcreaturetypes-promisestring-)
    - [`Catalog.enchantmentTypes(): Promise<string[]>;` ](#catalogenchantmenttypes-promisestring-)
    - [`Catalog.landTypes(): Promise<string[]>;`](#cataloglandtypes-promisestring-)
    - [`Catalog.loyalties(): Promise<string[]>;` ](#catalogloyalties-promisestring-)
    - [`Catalog.planeswalkerTypes(): Promise<string[]>;` ](#catalogplaneswalkertypes-promisestring-)
    - [`Catalog.powers(): Promise<string[]>;` ](#catalogpowers-promisestring-)
    - [`Catalog.spellTypes(): Promise<string[]>;` ](#catalogspelltypes-promisestring-)
    - [`Catalog.toughnesses(): Promise<string[]>;`](#catalogtoughnesses-promisestring-)
    - [`Catalog.watermarks(): Promise<string[]>;` ](#catalogwatermarks-promisestring-)
    - [`Catalog.wordBank(): Promise<string[]>;`](#catalogwordbank-promisestring-)

## Cards
- Full documentation [here](https://scryfall.com/docs/api/cards).

### `Cards.autoCompleteName(name: string): Promise<string[]>;`
- Full documentation [here](https://scryfall.com/docs/api/cards).
- URL: `https://api.scryfall.com/cards/autocomplete?q={name}`

Returns up to 20 full English card names that could be autocompletions of the given string parameter.

This method is designed for creating assistive UI elements that allow users to free-type card names.
The names are sorted with the nearest match first, highly favoring results that begin with your given string.
Spaces, punctuation, and capitalization are ignored.

If q is less than 2 characters long, or if no names match, the array will contain 0 items (instead of returning any errors).

```ts
import { Cards } from 'scryfall-api';

const results = await Cards.autoCompleteName('bloodsc');

for (const result of results) {
    console.log(result);
    // Bloodscent
    // Blood Scrivener
    // Bloodscale Prowler
    // Burning-Tree Bloodscale
    // Ghor-Clan Bloodscale
}
```

### `Cards.byArenaId(id: number): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a card based on its MTG Arena id.

```ts
import { Cards } from 'scryfall-api';

Cards.byArenaId(67330).then(result => console.log(result.name)); // Yargle, Glutton of Urborg
```

### `Cards.byId(id: string): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a single card from its ID.

```ts
import { Cards } from 'scryfall-api';

Cards.byId('9ea8179a-d3c9-4cdc-a5b5-68cc73279050').then(result => console.log(result.name)); // Blood Scrivener
```

### `Cards.byMtgoId(id: number): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a card based on its MTGO(sometimes called "Cat") id.

```ts
import { Cards } from 'scryfall-api';

Cards.byMtgoId(48338).then(result => console.log(result.name)); // Blood Scrivener
```

### `Cards.byMultiverseId(id: number): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a card based on its multiverse id.

```ts
Cards.byMultiverseId(369030).then(result => console.log(result.name)); // Blood Scrivener
```

### `Cards.byName(name: string, set?: string, fuzzy = false): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a card based on its name. Supports fuzzy searching, by 1-2 replacements/translations.

```ts
import { Cards } from 'scryfall-api';

Cards.byName('Blood Scrivener').then(result => console.log(result.name)); // Blood Scrivener
Cards.byName('Bliid Scrivener', true).then(result => console.log(result.name)); // Blood Scrivener
Cards.byName('Loxodon Warhammer', 'MRD').then(result => console.log(result.name, result.set)); // Loxodon Warhammer, mrd
Cards.byName('Warhammer', 'MRD', true).then(result => console.log(result.name, result.set)); // Loxodon Warhammer, mrd
```

### `Cards.bySet(setCode: string, collectorNumber: number, lang?: string): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a card based on its set and collector id. You can use the optional `lang` argument to get cards in another
language. See the [Scryfall Documentation for a list of all languages](https://scryfall.com/docs/api/languages).

```ts
import { Cards } from 'scryfall-api';

Cards.bySet('dgm', 22).then(result => console.log(result.name + ', ' + result.printed_name)); // Blood Scrivener, undefined
Cards.bySet('dgm', 22, 'ja').then(result => console.log(result.name + ', ' + result.printed_name)); // Blood Scrivener, 血の公証人
```

### `Cards.byTcgPlayerId(id: number): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a card based on its TCG Player id.

```ts
import { Cards } from 'scryfall-api';

Cards.byTcgPlayerId(1030).then(result => console.log(result.name)); // Ankh of Mishra
```

### `Cards.collection(...collection: CardIdentifier[]): Promise<Card[]>;` [↑](#table-of-contents)

Takes a list of "card identifiers", which describe a card, and returns their actual card objects.

This method is useful for decks and even entire collections. Scryfall has a limit of 75 cards, but this API will split
your request into multiple API calls, allowing requests of _as many cards as you want_.

In order to assist with manual requests, this method comes with a new set of factories by the name `CardIdentifier`.
These are:

- `CardIdentifier.byId(id: string): CardIdentifier;`
- `CardIdentifier.byMultiverseId(id: number): CardIdentifier;`
- `CardIdentifier.byMtgoId(id: number): CardIdentifier;`
- `CardIdentifier.byOracleId(id: string): CardIdentifier;`
- `CardIdentifier.byIllustrationId(id: string): CardIdentifier;`
- `CardIdentifier.byName(string: string, set?: string): CardIdentifier;`
- `CardIdentifier.byName(string: string, set?: string): CardIdentifier;`
- `CardIdentifier.bySet(set: string, collectorNumber: string | number): CardIdentifier;`

```ts
import { Cards, CardIdentifier } from 'scryfall-api';

const collection = [
	CardIdentifier.byId('94c70f23-0ca9-425e-a53a-6c09921c0075'),
	CardIdentifier.byMultiverseId(462293),
	CardIdentifier.byMtgoId(71692),
	CardIdentifier.byOracleId('394c6de5-7957-4a0b-a6b9-ee0c707cd022'),
	CardIdentifier.byIllustrationId('99f43949-049e-41e2-bf4c-e22e11790012'),
	CardIdentifier.byName('Blood Scrivener'),
	CardIdentifier.byName('Lightning Bolt', 'prm'),
	CardIdentifier.bySet('mrd', '150'),
];

const cards = await Cards.collection(...collection);
// every card identifier has been mapped to its real card object

for (const card of cards) {
	console.log(card.name);
}
// Crush Dissent
// Contentious Plan
// Bond of Insight
// Forgotten Cave
// GO TO JAIL
// Blood Scrivener
// Lightning Bolt
// Chalice of the Void
```

### `Cards.random(id: number): Promise<Card | undefined>;` [↑](#table-of-contents)

Gets a random card.

```ts
import { Cards } from 'scryfall-api';

Cards.random().then(result => console.log(result.name));
```

### `Cards.search(query: string, options?: SearchOptions | number): MagicPageResult<Card, Cards>;` [↑](#table-of-contents)

Queries for a card using the [Scryfall Search API](https://scryfall.com/docs/reference).

```ts
import { Cards } from 'scryfall-api';

Cards.search('type:planeswalker')
	.all()
	.then(result => console.log(result.name));
```

For information on how to provide extra options, see
the [`/get/cards/search`](https://scryfall.com/docs/api/cards/search) page on Scryfall. You can also reference
the [`SearchOptions`](src/types.old/SearchOptions.ts) interface

The page parameter is the page of results that the query will begin at. A page is 175 cards, and cannot be changed. To
get only the one page you requested, you can do the following:

```ts
import { Cards } from 'scryfall-api';

// Start in page 13
const result = Cards.search('type:planeswalker', 13);

// Get page 13
const cardsFromPage13 = await result.next(); // cardsFromPage13.lenth === 175

// Get page 14
const cardsFromPage14 = await result.next(); // cardsFromPage14.lenth === 175

// Or you can get any page directly by
const cardsFromPage15 = await result.page(15); // cardsFromPage15.lenth === 175
```

You can bypass the 175 card limit by using:

```ts
import { Cards } from 'scryfall-api';

// Get 300 cards starting on page 1
const result1 = await Cards.search('type:planeswalker').get(200); // result.lenth === 200

// Get 300 cards starting on page 13
const result2 = await Cards.search('type:planeswalker', 13).get(300); // result.lenth === 300
```

## Sets [↑](#table-of-contents)

### `Sets.all(): Promise<Set[]>;` [↑](#table-of-contents)

Gets all sets.

```ts
import { Sets } from 'scryfall-api';

Sets.all().then(result => console.log(result.lenh));
```

### `Sets.byCode(code: string): Promise<Set>;` [↑](#table-of-contents)

Gets a set by its code.

```ts
import { Sets } from 'scryfall-api';

Sets.byCode('hou').then(set => console.log(set.name)); // Hour of Devastation
```

### `Sets.byId(id: string): Promise<Set>;` [↑](#table-of-contents)

Gets a set by its Scryfall ID.

```ts
import { Sets } from 'scryfall-api';

Sets.byId('65ff168b-bb94-47a5-a8f9-4ec6c213e768').then(set => console.log(set.name)); // Hour of Devastation
```

### `Sets.byTcgPlayerId(id: number): Promise<Set>;` [↑](#table-of-contents)

Gets a set by its TCG Player ID, also known as the `groupId` on [TCGPlayer's API](https://docs.tcgplayer.com/docs).

```ts
import { Sets } from 'scryfall-api';

Sets.byTcgPlayerId(1934).then(set => console.log(set.name)); // Hour of Devastation
```

## Rulings [↑](#table-of-contents)

### `Rulings.byArenaId(id: number): Promise<Ruling[]>;` [↑](#table-of-contents)

Gets the rulings for a card based on its Arena id.

```ts
import { Rulings } from 'scryfall-api';

Rulings.byArenaId(67204).then(result => console.log(result.lenh)); // 3
```

### `Rulings.byId(id: string): Promise<Ruling[]>;` [↑](#table-of-contents)

Gets the rulings for a single card from its ID.

```ts
import { Rulings } from 'scryfall-api';

Rulings.byId('9ea8179a-d3c9-4cdc-a5b5-68cc73279050').then(result => console.log(result.lenh)); // 2
```

### `Rulings.byMtgoId(id: number): Promise<Ruling[]>;` [↑](#table-of-contents)

Gets the rulings for a card based on its MTGO(sometimes called "Cat") id.

```ts
import { Rulings } from 'scryfall-api';

Rulings.byMtgoId(48338).then(result => console.log(result.lenh)); // 2
```

### `Rulings.byMultiverseId(id: number): Promise<Ruling[]>;` [↑](#table-of-contents)

Gets the rulings for a card based on its multiverse id.

```ts
import { Rulings } from 'scryfall-api';

Rulings.byMultiverseId(369030).then(result => console.log(result.lenh)); // 2
```

### `Rulings.bySet(code: string, collectorId: string | number): Promise<Ruling[]>;` [↑](#table-of-contents)

Gets the rulings for a card based on its set and collector id.

```ts
import { Rulings } from 'scryfall-api';

Rulings.bySet('dgm', '22').then(result => console.log(result.lenh)); // 2
```

## Symbology [↑](#table-of-contents)

### `Symbology.all(): Promise<CardSymbol[]>;` [↑](#table-of-contents)

Gets all [card symbols](https://scryfall.com/docs/api/card-symbols).

```ts
import { Symbology } from 'scryfall-api';

Symbology.all().then(result => console.log(result.lenh)); // 63
```

### `Symbology.parseMana(mana: string): Promise<ManaCost>;` [↑](#table-of-contents)

From the [Scryfall documentation](https://scryfall.com/docs/api/card-symbols/parse-mana):

Parses the given mana cost parameter and returns Scryfall’s interpretation.

The server understands most community shorthand for mana costs(such as `2WW` for `{2}{W}{W}`). Symbols can also be out
of order, lowercase, or have multiple colorless costs(such as `2{g}2` for `{4}{G}`).

```ts
import { Symbology } from 'scryfall-api';

Symbology.parseMana('7wg').then(result => console.log(result.cost)); // {7}{W}{G}
```

## Catalogs [↑](#table-of-contents)

### `Catalog.cardNames(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.cardNames().then(result => console.log(result.lenh)); // 18059
```

### `Catalog.artistNames(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.artistNames().then(result => console.log(result.lenh)); // 676
```

### `Catalog.wordBank(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.wordBank().then(result => console.log(result.lenh)); // 12892
```

### `Catalog.creatureTypes(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.creatureTypes().then(result => console.log(result.lenh)); // 242
```

### `Catalog.planeswalkerTypes(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.planeswalkerTypes().then(result => console.log(result.lenh)); // 42
```

### `Catalog.landTypes(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.landTypes().then(result => console.log(result.lenh)); // 13
```

### `Catalog.artifactTypes(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.artifactTypes().then(result => console.log(result.lenh)); // 6
```

### `Catalog.enchantmentTypes(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.enchantmentTypes().then(result => console.log(result.lenh)); // 5
```

### `Catalog.spellTypes(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.spellTypes().then(result => console.log(result.lenh)); // 2
```

### `Catalog.powers(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.powers().then(result => console.log(result.lenh)); // 33
```

### `Catalog.toughnesses(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.toughnesses().then(result => console.log(result.lenh)); // 35
```

### `Catalog.loyalties(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.loyalties().then(result => console.log(result.lenh)); // 9
```

### `Catalog.watermarks(): Promise<string[]>;` [↑](#table-of-contents)

```ts
import { Catalog } from 'scryfall-api';

Catalog.watermarks().then(result => console.log(result.lenh)); // 50
```
