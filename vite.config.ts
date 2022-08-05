import { defineConfig, UserConfigExport } from 'vite';

export default defineConfig({
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
