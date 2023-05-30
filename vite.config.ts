import type { UserConfigExport } from 'vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
	build: {
		target: 'ESNext',
		lib: {
			formats: ['es', 'umd'],
			entry: 'src/index.ts',
			name: 'Scryfall'
		},
		sourcemap: false,
		rollupOptions: {
			output: {
				globals: {
					axios: 'Axios'
				}
			},
		},
	},
	plugins: [
		dts({
			skipDiagnostics: true,
			rollupTypes: true,
		}),
		externalizeDeps(),
	],
	test: {
		include: ['**/*.{test,spec}.{ts,tsx}'],
		coverage: {
			// reporter: ['cobertura', 'text'],
			include: ['**/src/**/*.{ts,tsx}'],
			exclude: ['**/src/**/index.{ts,tsx}', '**/src/test/**/*.{ts,tsx}'],
			extension: '.ts',
		},
	},
} as UserConfigExport);
