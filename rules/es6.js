/* eslint-disable unicorn/prefer-module */

module.exports = {
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'generator-star-spacing': ['error', 'after'],
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true,
            },
        ],
        'no-useless-computed-key': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': [
            'error',
            'always',
            {
                avoidQuotes: true,
                ignoreConstructors: true,
            },
        ],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
        ],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'rest-spread-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': ['error', 'after'],
    },
};
