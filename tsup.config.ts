import { defineConfig } from 'tsup';

export default defineConfig([
	{
		format: ['esm'],
		dts: true,
		clean: true,
		entry: ['./src/scryfall-api.ts'],
		minify: false,
		sourcemap: false,
	},
	{
		format: ['cjs'],
		dts: false,
		clean: false,
		entry: ['./src/scryfall-api.ts'],
		minify: false,
		sourcemap: false,
	},
	{
		format: ['esm', 'cjs'],
		dts: false,
		clean: false,
		entry: ['./src/scryfall-api.ts'],
		minify: true,
		sourcemap: false,
		outExtension({ format }) {
			return {
				js: `.min.${format === 'esm' ? 'js' : 'cjs'}`,
			};
		},
	},
]);
