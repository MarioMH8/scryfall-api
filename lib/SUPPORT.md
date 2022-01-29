## Supported:

| Query                                                                                                                               | Result             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`/cards/named?{fuzzy/exact}=<card name>`](DOCUMENTATION.md#cardsbyname-name-string-fuzzy--false-promisecard-)                    | Card               |
| [`/cards/:id`](DOCUMENTATION.md#cardsbyid-id-string-promisecard-)                                                                 | Card               |
| [`/cards/:set/:collector_number(/:lang)`](DOCUMENTATION.md#cardsbyset-setcode-string-collectorid-number-lang-string-promisecard-) | Card               |
| [`/cards/multiverse/:multiverse_id`](DOCUMENTATION.mdardsbymultiverseid-id-number-promisecard-)                                 | Card               |
| [`/cards/mtgo/:mtgo_id`](DOCUMENTATION.mdardsbymtgoid-id-number-promisecard-)                                                   | Card               |
| [`/cards/arena/:id`](DOCUMENTATION.mdardsbyarenaid-id-number-promisecard-)                                                      | Card               |
| [`/cards/tcgplayer/:id`](DOCUMENTATION.mdardsbytcgplayerid-id-number-promisecard-)                                              | Card               |
| [`/cards/random`](DOCUMENTATION.mdardsrandom-id-number-promisecard-)                                                            | Card               |
| [`/cards/search?q=:query`](DOCUMENTATION.mdardssearch-query-string-magicemittercard-)                                           | List\<Card\>       |
| [`/cards/autocomplete?q=:query`](DOCUMENTATION.mdardsautocompletename-name-string-promisestring-)                               | Catalog            |
| [`/cards/collection`](DOCUMENTATION.mdardscollection-collection-cardidentifier-magicemittercard-)                               | List\<Card\>       |
| [`/sets`](DOCUMENTATION.mdetsall--promiseset-)                                                                                  | List\<Set\>        |
| [`/sets/:code`](DOCUMENTATION.mdetsbycode-code-string-promiseset-)                                                              | Set                |
| [`/sets/:id`](DOCUMENTATION.mdetsbyid-id-string-promiseset-)                                                                    | Set                |
| [`/sets/tcgplayer/:id`](DOCUMENTATION.mdetsbytcgplayerid-id-number-promiseset-)                                                 | Set                |
| [`/cards/multiverse/:id/rulings`](DOCUMENTATION.mdulingsbymultiverseid-id-number-promiseruling-)                                | List\<Ruling\>     |
| [`/cards/mtgo/:id/rulings`](DOCUMENTATION.mdulingsbymtgoid-id-number-promiseruling-)                                            | List\<Ruling\>     |
| [`/cards/arena/:id/rulings`](DOCUMENTATION.mdulingsbyarenaid-id-number-promiseruling-)                                          | List\<Ruling\>     |
| [`/cards/:code/:number/rulings`](DOCUMENTATION.mdulingsbyset-code-string-collectorid-string-promiseruling-)                     | List\<Ruling\>     |
| [`/cards/:id/rulings`](DOCUMENTATION.mdulingsbyid-id-string-promiseruling-)                                                     | List\<Ruling\>     |
| [`/symbology`](DOCUMENTATION.mdymbologyall--promisecardsymbol-)                                                                 | List\<CardSymbol\> |
| [`/symbology/parse-mana?cost=:cost`](DOCUMENTATION.mdymbologyparsemana-mana-string-promisemanacost-)                            | ManaCost           |
| [`/catalog/card-names`](DOCUMENTATION.mdatalogcardnames--promisestring-)                                                        | Catalog            |
| [`/catalog/word-bank`](DOCUMENTATION.mdatalogwordbank--promisestring-)                                                          | Catalog            |
| [`/catalog/creature-types`](DOCUMENTATION.mdatalogcreaturetypes--promisestring-)                                                | Catalog            |
| [`/catalog/planeswalker-types`](DOCUMENTATION.mdatalogplaneswalkertypes--promisestring-)                                        | Catalog            |
| [`/catalog/land-types`](DOCUMENTATION.mdataloglandtypes--promisestring-)                                                        | Catalog            |
| [`/catalog/artifact-types`](DOCUMENTATION.mdatalogartifacttypes--promisestring-)                                                | Catalog            |
| [`/catalog/enchantment-types`](DOCUMENTATION.mdatalogenchantmenttypes--promisestring-)                                          | Catalog            |
| [`/catalog/spell-types`](DOCUMENTATION.mdatalogspelltypes--promisestring-)                                                      | Catalog            |
| [`/catalog/powers`](DOCUMENTATION.mdatalogpowers--promisestring-)                                                               | Catalog            |
| [`/catalog/toughnesses`](DOCUMENTATION.mdatalogtoughnesses--promisestring-)                                                     | Catalog            |
| [`/catalog/loyalties`](DOCUMENTATION.mdatalogloyalties--promisestring-)                                                         | Catalog            |
| [`/catalog/watermarks`](DOCUMENTATION.mdatalogwatermarks--promisestring-)                                                       | Catalog            |
