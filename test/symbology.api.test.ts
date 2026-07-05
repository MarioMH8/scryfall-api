import { describe, expect, it } from 'bun:test';

import { InvalidScryfallArgumentError, SymbologyApi } from '../src';

describe('scryfall-api', () => {
	describe('Symbology', () => {
		describe('.all()', () => {
			it('should works as expected', async () => {
				const symbology = await SymbologyApi.all();
				expect(symbology.length).toBeGreaterThanOrEqual(75);
			});
		});
		describe('.parseMana()', () => {
			it('should works as expected', async () => {
				const cost = await SymbologyApi.parseMana('2ww');
				expect(cost.cost).toBe('{2}{W}{W}');
			});
			it('should throw if invalid shorthand', () => {
				// @ts-expect-error TS2554: Expected 1 arguments, but got 0
				expect(() => SymbologyApi.parseMana()).toThrow(InvalidScryfallArgumentError);
				// @ts-expect-error TS2345: Argument of type number is not assignable to parameter of type string
				expect(() => SymbologyApi.parseMana(1)).toThrow(InvalidScryfallArgumentError);
				expect(() => SymbologyApi.parseMana('')).toThrow(InvalidScryfallArgumentError);
			});
		});
	});
});
