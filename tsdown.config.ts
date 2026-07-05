import { defineConfig } from 'tsdown';

export default defineConfig([
	{
		dts: true,
		entry: ['./src/scryfall-api.ts'],
		format: ['esm'],
		minify: false,
		sourcemap: false,
	},
]);
