/* eslint-disable unicorn/prefer-module */

module.exports = {
	rules: {
		'perfectionist/sort-array-includes': [
			'error',
			{
				'spread-last': true,
				'type': 'natural',
			},
		],
		'perfectionist/sort-astro-attributes': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-classes': [
			'error',
			{
				groups: [
					'index-signature',
					'static-property',
					'private-property',
					'property',
					'constructor',
					'static-method',
					'private-method',
					'static-private-method',
					'method',
					[
						'get-method',
						'set-method',
					],
					'unknown',
				],
				type: 'natural',
			},
		],
		'perfectionist/sort-enums': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-exports': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-imports': [
			'error',
			{
				'groups': [
					'type',
					'internal-type',
					[
						'parent-type',
						'sibling-type',
						'index-type',
					],
					[
						'builtin',
						'external',
					],
					'internal',
					[
						'parent',
						'sibling',
						'index',
					],
					'object',
					'unknown',
				],
				'internal-pattern': [
					'@/**',
					'~/**',
				],
				'newlines-between': 'always',
				'type': 'natural',
				// 'read-tsconfig': true,
			},
		],
		'perfectionist/sort-interfaces': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-jsx-props': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-maps': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-named-exports': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-named-imports': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-object-types': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-objects': [
			'error',
			{
				'partition-by-comment': '**',
				'type': 'natural',
			},
		],
		'perfectionist/sort-svelte-attributes': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-union-types': [
			'error',
			{ type: 'natural' },
		],
		'perfectionist/sort-vue-attributes': [
			'error',
			{
				// Based on: https://vuejs.org/style-guide/rules-recommended.html#element-attribute-order
				'custom-groups': {
					/* eslint-disable perfectionist/sort-objects */
					DEFINITION: 'is',
					LIST_RENDERING: 'v-for',
					CONDITIONALS: 'v-*(else-if|if|else|show|cloak)',
					RENDER_MODIFIERS: 'v-*(pre|once)',
					GLOBAL: 'id',
					UNIQUE: '*(ref|key)',
					SLOT: '*(v-slot|slot)',
					TWO_WAY_BINDING: 'v-model',
					EVENTS: '*(v-on|@*)',
					CONTENT: 'v-*(html|text)',
					/* eslint-enable perfectionist/sort-objects */
				},
				'groups': [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					'UNIQUE',
					'SLOT',
					'TWO_WAY_BINDING',
					'unknown',
					'EVENTS',
					'CONTENT',
				],
				'type': 'natural',
			},
		],
	},
};
