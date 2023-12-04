/* eslint-disable unicorn/prefer-module */

const rulesExtends = require('./rules');

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	ignorePatterns: [
		'!.*.js',
		'!.*.mjs',
		'!.*.json',
		'**/package-lock.json',
		'**/.package-lock.json',
		'**/package.json',
		'/.nuxt/**',
		'/dist/**',
		'/static/sw.*',
	],
	overrides: [
		{
			extends: rulesExtends,
			files: [
				'**/*.js',
				'**/*.mjs',
			],
			parser: '@babel/eslint-parser',
		},
		{
			extends: [
				'plugin:jsonc/recommended-with-json',
				'./rules/plugins/jsonc',
			],
			files: ['**/*.json'],
			parser: 'jsonc-eslint-parser',
		},
	],
	parserOptions: {
		ecmaVersion: 2021,
		requireConfigFile: false,
		sourceType: 'module',
	},
	plugins: [
		'import-newlines',
		'perfectionist',
		'unicorn',
	],
	settings: {
		'import/resolver': {
			alias: {
				extensions: [
					'.js',
					'.vue',
					'.ts',
					'.tsx',
				],
				map: [
					[
						'@',
						'.',
					],
					[
						'~',
						'.',
					],
				],
			},
		},
	},
};
