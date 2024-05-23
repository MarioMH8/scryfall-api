import { describe, expect, it } from 'bun:test';

import type { Card } from '../src';
import { CardIdentifierBuilder, Cards } from '../src';

describe('scryfall-sdk', () => {
	describe('Cards', () => {
		describe('by id,', () => {
			it('exact', async () => {
				const card = await Cards.byId('9ea8179a-d3c9-4cdc-a5b5-68cc73279050');
				expect(card).toBeDefined();
				expect(card?.name).toBe('Blood Scrivener');
				expect(card?.released_at).toBeDefined();
				expect(card?.released_at).toBeInstanceOf(Date);
			});
			it('not found', async () => {
				const card = await Cards.byId('343a69ab-19f4-43be-99da-cff50cc1e0fe');
				expect(card).toBeUndefined();
			});
		});

		describe('by name,', () => {
			it('exact', async () => {
				const card = await Cards.byName('Blood Scrivener');
				expect(card).toBeDefined();
				expect(card?.name).toBe('Blood Scrivener');
			});

			it('fuzzy', async () => {
				const card = await Cards.byName('Bliid Scrivener', true);
				expect(card).toBeDefined();
				expect(card?.name).toBe('Blood Scrivener');
			});

			it('with set filter', async () => {
				const card = await Cards.byName('Loxodon Warhammer', 'MRD');
				expect(card).toBeDefined();
				expect(card?.name).toBe('Loxodon Warhammer');
				expect(card?.set).toBe('mrd');
			});

			it('fuzzy with set filter', async () => {
				const card = await Cards.byName('Warhammer', 'MRD', true);
				expect(card).toBeDefined();
				expect(card?.name).toBe('Loxodon Warhammer');
				expect(card?.set).toBe('mrd');
			});
		});

		it('by set', async () => {
			const card = await Cards.bySet('dgm', 22);
			expect(card).toBeDefined();
			expect(card?.name).toBe('Blood Scrivener');
		});

		it('by multiverse id', async () => {
			const card = await Cards.byMultiverseId(369_030);
			expect(card).toBeDefined();
			expect(card?.name).toBe('Blood Scrivener');
		});

		it('by mtgo id', async () => {
			const card = await Cards.byMtgoId(48_338);
			expect(card).toBeDefined();
			expect(card?.name).toBe('Blood Scrivener');
		});

		it('by arena id', async () => {
			const card = await Cards.byArenaId(67_330);
			expect(card).toBeDefined();
			expect(card?.name).toBe('Yargle, Glutton of Urborg');
		});

		it('by tcg player id', async () => {
			const card = await Cards.byTcgPlayerId(1030);
			expect(card).toBeDefined();
			expect(card?.name).toBe('Ankh of Mishra');
		});

		it('in lang', async () => {
			const card = await Cards.bySet('dom', 1, 'ja');
			expect(card).toBeDefined();
			expect(card?.printed_name).toBe('ウルザの後継、カーン');
		});

		it('random', async () => {
			const card = await Cards.random();
			expect(card).toBeDefined();
		});

		describe('search', () => {
			it('search', async () => {
				const q = Cards.search('type:planes');
				const results: Card[] = await q.all();
				for (const card of results) {
					expect(card.type_line).toMatch('Planeswalker');
				}
				expect(q.count).toBeGreaterThan(97);
				expect(results.length).toBeGreaterThan(97);
			});

			it('search waitForAll', async () => {
				const matches = await Cards.search('!smoker').all();
				expect(matches.length).toBe(0);
			});

			it('search by set', async () => {
				const results = await Cards.search('s:kld', { order: 'cmc' }).all();
				expect(results.length).toBe(264);
				for (const [index, v] of results.entries()) {
					if (index === 0) {
						continue;
					}
					expect(v.cmc).toBeGreaterThanOrEqual(results[index - 1]?.cmc ?? 0);
				}
			});

			it('search type:creature (get only 427 cards)', async () => {
				const results = await Cards.search('type:creature').get(427);
				expect(results.length).toBe(427);
			}, 20_000);

			it('should support pagination of searches', async () => {
				const firstR = await Cards.search('type:creature', 1).get(1);
				const secondR = await Cards.search('type:creature', 2).get(1);
				expect(firstR.length).toBe(1);
				expect(secondR.length).toBe(1);
				const first = firstR[0];
				const second = secondR[0];
				expect(first).toBeDefined();
				expect(second).toBeDefined();
				expect(first?.id).not.toEqual(second?.id);
			}, 20_000);

			it('should return an empty array on an invalid search', async () => {
				const result = await Cards.search('cmc>cmc').all();
				expect(result.length).toBe(0);
			});
		});

		it('autocomplete name', async () => {
			const cardNames = await Cards.autoCompleteName('bloodsc');
			expect(cardNames).toContain('Blood Scrivener');
		});

		describe('collection', () => {
			it('by id', async () => {
				const collection = [CardIdentifierBuilder.byId('94c70f23-0ca9-425e-a53a-6c09921c0075')];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Crush Dissent');
			});

			it('by multiverse id', async () => {
				const collection = [CardIdentifierBuilder.byMultiverseId(462_293)];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Contentious Plan');
			});

			it('by mtgo id', async () => {
				const collection = [CardIdentifierBuilder.byMtgoId(71_692)];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Bond of Insight');
			});

			it('by oracle id', async () => {
				const collection = [CardIdentifierBuilder.byOracleId('394c6de5-7957-4a0b-a6b9-ee0c707cd022')];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Forgotten Cave');
			});

			it('by illustration id', async () => {
				const collection = [CardIdentifierBuilder.byIllustrationId('99f43949-049e-41e2-bf4c-e22e11790012')];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('GO TO JAIL');
			});

			it('by name', async () => {
				const collection = [CardIdentifierBuilder.byName('Blood Scrivener')];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Blood Scrivener');
			});

			it('by name & set', async () => {
				const collection = [CardIdentifierBuilder.byName('Lightning Bolt', 'prm')];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Lightning Bolt');
				expect(cards[0]?.set).toBe('prm');
			});

			it('by set', async () => {
				const collection = [CardIdentifierBuilder.bySet('mrd', '150')];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Chalice of the Void');
			});

			it('by multiverse id, 100 cards', async () => {
				const collection = [];
				for (let index = 1; index < 101; index++) {
					collection.push(CardIdentifierBuilder.byMultiverseId(index));
				}

				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(100);
				for (let index = 0; index < 100; index++) {
					expect(cards[index]?.multiverse_ids).toContain(index + 1);
				}
			});

			it('by id with invalid', async () => {
				const collection = [
					CardIdentifierBuilder.byId('94c70f23-0ca9-425e-a53a-6c09921c0075'),
					CardIdentifierBuilder.byId('94c70f23-0ca9-425e-a53a-111111111111'),
				];
				const cards = await Cards.collection(...collection);
				expect(cards.length).toBe(1);
				expect(cards[0]?.name).toBe('Crush Dissent');
			});
		});
	});
});
