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
		'perfectionist/sort-classes': [
			'error',
			{
				groups: [
					'static-property',
					'private-property',
					'property',
					'constructor',
					'static-method',
					'private-method',
					'method',
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
			{
				'always-on-top': ['id'],
				'type': 'natural',
			},
		],
		'perfectionist/sort-map-elements': [
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
		'perfectionist/sort-union-types': [
			'error',
			{ type: 'natural' },
		],
	},
};
