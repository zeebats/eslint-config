/* eslint-disable unicorn/prefer-module */

module.exports = {
	rules: {
		'jsonc/array-bracket-newline': [
			'error',
			{
				minItems: 2,
				multiline: true,
			},
		],
		'jsonc/array-bracket-spacing': 'error',
		'jsonc/array-element-newline': [
			'error',
			{
				minItems: 2,
				multiline: true,
			},
		],
		'jsonc/comma-style': 'error',
		'jsonc/indent': [
			'error',
			'tab',
		],
		'jsonc/key-spacing': [
			'error',
			{
				afterColon: true,
				beforeColon: false,
				mode: 'strict',
			},
		],
		'jsonc/no-octal-escape': 'error',
		'jsonc/object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					minProperties: 2,
					multiline: true,
				},
			},
		],
		'jsonc/object-curly-spacing': [
			'error',
			'always',
		],
		'jsonc/object-property-newline': 'error',
		'jsonc/sort-keys': [
			'error',
			{
				order: {
					natural: true,
					type: 'asc',
				},
				pathPattern: '.*',
			},
		],
	},
};
