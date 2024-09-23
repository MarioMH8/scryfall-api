import hexadrop from '@hexadrop/eslint-config';

export default hexadrop(
	{
		files: ['src/**/*.ts'],
		rules: {
			'no-await-in-loop': 'warn',
			'no-console': 'warn',
		},
	},
	{
		files: ['**/*.md/*.ts', '**/*.md/*.js'],
		rules: {
			'import/no-commonjs': 'off',
			'typescript/no-require-imports': 'off',
			'typescript/no-var-requires': 'off',
			'unicorn/prefer-module': 'off',
			'unicorn/prefer-top-level-await': 'off',
		},
	}
);
