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
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
				'./rules/plugins/typescript',
			],
			files: [
				'**/*.ts',
				'**/*.tsx',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: { project: './tsconfig.json' },
		},
		{
			files: ['**/*.vue'],
			rules: { 'no-undef': 'off' },
		},
	],
	settings: {
		'import/resolver': {
			...base.settings['import/resolver'],
			typescript: { alwaysTryTypes: true },
		},
	},
};
