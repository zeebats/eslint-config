/* eslint-disable unicorn/prefer-module */

const base = require('.');

const rulesExtends = require('./rules');

module.exports = {
	...base,
	overrides: [
		...base.overrides,
		{
			extends: [
				...rulesExtends,
				'plugin:astro/base',
				'./rules/plugins/astro',
			],
			files: ['**/*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: '@typescript-eslint/parser',
			},
		},
	],
};
