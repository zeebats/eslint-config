/* eslint-disable unicorn/prefer-module */

module.exports = {
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': 'error',
        'brace-style': 'error',
        'camelcase': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-name-matching': 'error',
        'func-names': ['error', 'never'],
        'func-style': 'error',
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4, {
            SwitchCase: 1,
        }],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'error',
        'linebreak-style': 'error',
        'lines-between-class-members': 'error',
        'max-depth': 'error',
        'max-len': [
            'warn',
            {
                code: 120,
            },
        ],
        'max-lines': 'warn',
        'max-lines-per-function': [
            'warn',
            {
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-params': 'error',
        'max-statements': 'warn',
        'max-statements-per-line': 'error',
        'multiline-ternary': ['error', 'never'],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-negated-condition': 'error',
        'no-new-object': 'error',
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': [
            'error',
            {
                enforceInMethodNames: true,
            },
        ],
        'no-unneeded-ternary': [
            'error',
            {
                defaultAssignment: false,
            },
        ],
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', {
            ExportDeclaration: {
                minProperties: 2,
                multiline: true,
            },
            ImportDeclaration: {
                minProperties: 4,
                multiline: true,
            },
            ObjectExpression: {
                minProperties: 1,
                multiline: true,
            },
            ObjectPattern: {
                minProperties: 4,
                multiline: true,
            },
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'error',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': 'error',
        'operator-linebreak': ['error', 'after'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: 'return',
                prev: '*',
            },
        ],
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: false,
                avoidEscape: true,
            },
        ],
        'semi': 'error',
        'semi-style': 'error',
        'sort-destructure-keys/sort-destructure-keys': 'error',
        'sort-keys': [
            'error',
            'asc',
            {
                natural: true,
            },
        ],
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                nonwords: false,
                words: true,
            },
        ],
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'wrap-regex': 'error',
    },
};
