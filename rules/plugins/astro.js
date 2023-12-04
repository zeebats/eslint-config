/* eslint-disable unicorn/prefer-module */

module.exports = {
	rules: {
		'astro/no-conflict-set-directives': 'error',
		'astro/no-deprecated-astro-canonicalurl': 'error',
		'astro/no-deprecated-astro-fetchcontent': 'error',
		'astro/no-deprecated-astro-resolve': 'error',
		'astro/no-set-html-directive': 'warn',
		'astro/no-set-text-directive': 'error',
		'astro/no-unused-css-selector': 'error',
		'astro/no-unused-define-vars-in-style': 'error',
		'astro/prefer-class-list-directive': 'error',
		'astro/prefer-object-class-list': 'error',
		'astro/prefer-split-class-list': 'error',
		'astro/valid-compile': 'error',

		/* Semi */
		'astro/semi': 'error',
		'semi': 'off',

		/* JSX-a11y */
		'astro/jsx-a11y/alt-text': 'error',
		'astro/jsx-a11y/anchor-ambiguous-text': [
			'error',
			{ words: ['click here'] },
		],
		'astro/jsx-a11y/anchor-is-valid': 'error',
		'astro/jsx-a11y/aria-activedescendant-has-tabindex': 'error',
		'astro/jsx-a11y/aria-props': 'error',
		'astro/jsx-a11y/aria-proptypes': 'error',
		'astro/jsx-a11y/aria-role': 'error',
		'astro/jsx-a11y/aria-unsupported-elements': 'error',
		'astro/jsx-a11y/autocomplete-valid': 'error',
		'astro/jsx-a11y/click-events-have-key-events': 'error',
		'astro/jsx-a11y/control-has-associated-label': [
			'error',
			{
				ignoreElements: [
					'audio',
					'canvas',
					'embed',
					'input',
					'textarea',
					'tr',
					'video',
				],
				ignoreRoles: [
					'grid',
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'row',
					'tablist',
					'toolbar',
					'tree',
					'treegrid',
				],
				includeRoles: [
					'alert',
					'dialog',
				],
			},
		],
		'astro/jsx-a11y/heading-has-content': 'error',
		'astro/jsx-a11y/html-has-lang': 'error',
		'astro/jsx-a11y/iframe-has-title': 'error',
		'astro/jsx-a11y/img-redundant-alt': 'error',
		'astro/jsx-a11y/interactive-supports-focus': [
			'error',
			{
				tabbable: [
					'button',
					'checkbox',
					'link',
					'progressbar',
					'searchbox',
					'slider',
					'spinbutton',
					'switch',
					'textbox',
				],
			},
		],
		'astro/jsx-a11y/label-has-associated-control': 'error',
		'astro/jsx-a11y/label-has-for': 'off',
		'astro/jsx-a11y/media-has-caption': 'error',
		'astro/jsx-a11y/mouse-events-have-key-events': 'error',
		'astro/jsx-a11y/no-access-key': 'error',
		'astro/jsx-a11y/no-autofocus': 'error',
		'astro/jsx-a11y/no-distracting-elements': 'error',
		'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': [
			'error',
			{
				canvas: ['img'],
				tr: [
					'none',
					'presentation',
				],
			},
		],
		'astro/jsx-a11y/no-noninteractive-element-interactions': [
			'error',
			{
				alert: [
					'onKeyUp',
					'onKeyDown',
					'onKeyPress',
				],
				body: [
					'onError',
					'onLoad',
				],
				dialog: [
					'onKeyUp',
					'onKeyDown',
					'onKeyPress',
				],
				handlers: [
					'onClick',
					'onError',
					'onLoad',
					'onMouseDown',
					'onMouseUp',
					'onKeyPress',
					'onKeyDown',
					'onKeyUp',
				],
				iframe: [
					'onError',
					'onLoad',
				],
				img: [
					'onError',
					'onLoad',
				],
			},
		],
		'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': [
			'error',
			{
				fieldset: [
					'radiogroup',
					'presentation',
				],
				li: [
					'menuitem',
					'option',
					'row',
					'tab',
					'treeitem',
				],
				ol: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
				table: ['grid'],
				td: ['gridcell'],
				ul: [
					'listbox',
					'menu',
					'menubar',
					'radiogroup',
					'tablist',
					'tree',
					'treegrid',
				],
			},
		],
		'astro/jsx-a11y/no-noninteractive-tabindex': [
			'error',
			{
				allowExpressionValues: true,
				roles: ['tabpanel'],
				tags: [],
			},
		],
		'astro/jsx-a11y/no-redundant-roles': 'error',
		'astro/jsx-a11y/no-static-element-interactions': [
			'error',
			{
				allowExpressionValues: true,
				handlers: [
					'onClick',
					'onMouseDown',
					'onMouseUp',
					'onKeyPress',
					'onKeyDown',
					'onKeyUp',
				],
			},
		],
		'astro/jsx-a11y/role-has-required-aria-props': 'error',
		'astro/jsx-a11y/role-supports-aria-props': 'error',
		'astro/jsx-a11y/scope': 'error',
		'astro/jsx-a11y/tabindex-no-positive': 'error',
	},
};
