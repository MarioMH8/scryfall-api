import { describe, expect, it } from 'bun:test';

import { InvalidScryfallArgumentError, Symbology } from '../src';

describe('Scryfall', () => {
	describe('Symbology', () => {
		describe('.all()', () => {
			it('should works as expected', async () => {
				const symbology = await Symbology.all();
				expect(symbology.length).toBeGreaterThanOrEqual(75);
			});
		});
		describe('.parseMana()', () => {
			it('should works as expected', async () => {
				const cost = await Symbology.parseMana('2ww');
				expect(cost).toMatchSnapshot();
			});
			it('should throw if invalid shorthand', () => {
				// @ts-expect-error test
				expect(() => Symbology.parseMana()).toThrow(InvalidScryfallArgumentError);
				// @ts-expect-error test
				expect(() => Symbology.parseMana(1)).toThrow(InvalidScryfallArgumentError);
				// @ts-expect-error test
				expect(() => Symbology.parseMana('')).toThrow(InvalidScryfallArgumentError);
			});
		});
	});
});
