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
					['decorated-property'],

					[
						'public-static-property',
						'property',
					],

					// Index signature
					'signature',
					'call-signature',

					// Fields
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					'#private-static-field',

					'public-decorated-field',
					'protected-decorated-field',
					'private-decorated-field',

					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',
					'#private-instance-field',

					'public-abstract-field',
					'protected-abstract-field',

					'public-field',
					'protected-field',
					'private-field',
					'#private-field',

					'static-field',
					'instance-field',
					'abstract-field',

					'readonly-field',
					'decorated-field',
					'field',

					// Static initialization
					'static-initialization',

					// Constructors
					'public-constructor',
					'protected-constructor',
					'private-constructor',

					'constructor',

					// Accessors
					'public-static-accessor',
					'protected-static-accessor',
					'private-static-accessor',
					'#private-static-accessor',

					'public-decorated-accessor',
					'protected-decorated-accessor',
					'private-decorated-accessor',

					'public-instance-accessor',
					'protected-instance-accessor',
					'private-instance-accessor',
					'#private-instance-accessor',

					'public-abstract-accessor',
					'protected-abstract-accessor',

					'public-accessor',
					'protected-accessor',
					'private-accessor',
					'#private-accessor',

					'static-accessor',
					'instance-accessor',
					'abstract-accessor',

					'decorated-accessor',

					'accessor',

					// Getters
					'public-static-get',
					'protected-static-get',
					'private-static-get',
					'#private-static-get',

					'public-decorated-get',
					'protected-decorated-get',
					'private-decorated-get',

					'public-instance-get',
					'protected-instance-get',
					'private-instance-get',
					'#private-instance-get',

					'public-abstract-get',
					'protected-abstract-get',

					'public-get',
					'protected-get',
					'private-get',
					'#private-get',

					'static-get',
					'instance-get',
					'abstract-get',

					'decorated-get',

					'get',

					// Setters
					'public-static-set',
					'protected-static-set',
					'private-static-set',
					'#private-static-set',

					'public-decorated-set',
					'protected-decorated-set',
					'private-decorated-set',

					'public-instance-set',
					'protected-instance-set',
					'private-instance-set',
					'#private-instance-set',

					'public-abstract-set',
					'protected-abstract-set',

					'public-set',
					'protected-set',
					'private-set',
					'#private-set',

					'static-set',
					'instance-set',
					'abstract-set',

					'decorated-set',

					'set',

					'unknown',

					// Methods
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					'#private-static-method',

					'public-decorated-method',
					'protected-decorated-method',
					'private-decorated-method',

					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
					'#private-instance-method',

					'public-abstract-method',
					'protected-abstract-method',

					'public-method',
					'protected-method',
					'private-method',
					'#private-method',

					'static-method',
					'instance-method',
					'abstract-method',

					'protected-override-method',
					'public-override-method',

					'method',

					'readonly-method',

					'#method',

					'#unknown',
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
			{
				'group-kind': 'types-first',
				'type': 'natural',
			},
		],
		'perfectionist/sort-named-imports': [
			'error',
			{
				'group-kind': 'types-first',
				'type': 'natural',
			},
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
