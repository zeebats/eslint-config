/* eslint-disable unicorn/prefer-module */

const base = require('.');

const rulesExtends = require('./rules');

module.exports = {
	...base,
	overrides: [
		...base.overrides,
		{
			env: {
				'astro/astro': true,
				'es2020': true,
				'node': true,
			},
			extends: [
				...rulesExtends,
				'./rules/plugins/astro',
			],
			files: ['**/*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
			},
			plugins: ['astro'],
			processor: 'astro/client-side-ts',
		},
		{
			env: {
				browser: true,
				es2020: true,
			},
			extends: [
				...rulesExtends,
				'./rules/plugins/astro',
			],
			files: [
				'**/*.astro/*.js',
				'*.astro/*.js',
			],
			parserOptions: { sourceType: 'module' },
		},
		{
			env: {
				browser: true,
				es2020: true,
			},
			extends: [
				...rulesExtends,
				'./rules/plugins/astro',
			],
			files: [
				'**/*.astro/*.ts',
				'*.astro/*.ts',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: null,
				sourceType: 'module',
			},
		},
	],
};
