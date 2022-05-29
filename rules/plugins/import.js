/* eslint-disable unicorn/prefer-module */

module.exports = {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
        'error',
        {
            'alphabetize': {
                caseInsensitive: true,
                order: 'asc',
            },
            'groups': [
                'builtin',
                'external',
                'internal',
                'parent',
                'index',
                'sibling',
                'object',
                'type',
            ],
            'newlines-between': 'always',
        },
    ],
};
