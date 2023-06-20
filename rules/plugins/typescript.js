/* eslint-disable sort-keys, unicorn/prefer-module */

module.exports = {
	rules: {
		// Typescript Rules
		'@typescript-eslint/adjacent-overload-signatures': 'off',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/consistent-indexed-object-style': [
			'error',
			'index-signature',
		],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'type',
		],
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				allowArgumentsExplicitlyTypedAsAny: false,
				allowDirectConstAssertionInArrowFunctions: false,
				allowHigherOrderFunctions: false,
				allowTypedFunctionExpressions: false,
			},
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/method-signature-style': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				format: ['camelCase'],
				selector: 'default',
			},
			{
				format: [
					'camelCase',
					'UPPER_CASE',
				],
				selector: 'variable',
			},
			{
				format: ['camelCase'],
				leadingUnderscore: 'allow',
				selector: 'parameter',
			},
			{
				format: ['camelCase'],
				leadingUnderscore: 'require',
				modifiers: ['private'],
				selector: 'memberLike',
			},
			{
				format: ['PascalCase'],
				selector: 'typeLike',
			},
		],
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-duplicate-type-constituents': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-meaningless-void-operator': [
			'error',
			{ checkNever: true },
		],
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-mixed-enums': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-type-alias': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
			'error',
			{
				allowComparingNullableBooleansToFalse: false,
				allowComparingNullableBooleansToTrue: false,
			},
		],
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		'@typescript-eslint/no-unsafe-enum-comparison': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		// '@typescript-eslint/parameter-properties': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': [
			'error',
			{
				ignoreConditionalTests: false,
				ignoreMixedLogicalExpressions: false,
				ignoreTernaryTests: false,
			},
		],
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-readonly-parameter-types': [
			'error',
			{ treatMethodsAsReadonly: true },
		],
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				allowAny: false,
				checkCompoundAssignments: true,
			},
		],
		'@typescript-eslint/restrict-template-expressions': 'error',
		'@typescript-eslint/sort-type-constituents': 'off',
		'@typescript-eslint/strict-boolean-expressions': [
			'error',
			{
				allowNullableEnum: true,
				allowNullableObject: false,
				allowNumber: false,
				allowString: false,
			},
		],
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/unified-signatures': 'error',

		// Extension Rules
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/init-declarations': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				ignoreArrayIndexes: true,
				ignoreEnums: true,
			},
		],
		'@typescript-eslint/no-redeclare': [
			'error',
			{ ignoreDeclarationMerge: false },
		],
		'@typescript-eslint/no-restricted-imports': 'error',
		'@typescript-eslint/no-shadow': [
			'error',
			{
				ignoreFunctionTypeParameterNameValueShadow: false,
				ignoreTypeValueShadow: false,
			},
		],
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ ignoreTypeReferences: false },
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/return-await': 'error',
		'default-param-last': 'off',
		'dot-notation': 'off',
		'init-declarations': 'off',
		'no-implied-eval': 'off',
		'no-invalid-this': 'off',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-restricted-imports': 'off',
		'no-return-await': 'off',
		'no-shadow': 'off',
		'no-throw-literal': 'off',
		'no-unused-expressions': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
	},
};
