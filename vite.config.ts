import typescript2 from 'rollup-plugin-typescript2';
import { defineConfig, UserConfigExport } from 'vite';

export default defineConfig({
	build: {
		target: 'ESNext',
		lib: {
			formats: ['es', 'umd', 'cjs'],
			entry: 'src/index.ts',
			name: 'Scry',
		},
		sourcemap: false,
		rollupOptions: {
			external: [
				'axios',
			],
			output: {
				exports: 'named',
				globals: {
					axios: 'Axios',
				},
			},
		},
	},
	plugins: [
		{
			...typescript2({
				check: false,
				tsconfigOverride: {
					compilerOptions: {
						module: 'ES2020',
						declaration: true,
						declarationDir: 'dist/types',
						emitDeclarationOnly: true,
						baseUrl: '.',
					},
				},
				include: ['src/*.ts+(|x)', 'src/**/*.ts+(|x)'],
				useTsconfigDeclarationDir: true,
			}),
			apply: 'build',
		},
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
