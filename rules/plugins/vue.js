/* eslint-disable unicorn/prefer-module */

module.exports = {
	rules: {
		'vue/attributes-order': 'off', /* In favor of perfectionist/sort-vue-attributes */
		'vue/block-tag-newline': [
			'error',
			{
				multiline: 'always',
				singleline: 'always',
			},
		],
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{ registeredComponentsOnly: false },
		],
		'vue/html-indent': [
			'error',
			'tab',
		],
		'vue/multi-word-component-names': 'off',
		'vue/no-empty-component-block': 'error',
		'vue/no-template-target-blank': 'error',
		'vue/padding-line-between-blocks': [
			'error',
			'always',
		],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/v-on-function-call': 'error',
		'vuejs-accessibility/label-has-for': [
			'error',
			{
				allowChildren: true,
				required: {
					some: [
						'nesting',
						'id',
					],
				},
			},
		],
		'vuejs-accessibility/media-has-caption': 'off',
	},
};
