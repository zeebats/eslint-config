/* eslint-disable unicorn/prefer-module */

module.exports = {
    rules: {
        'jsonc/array-bracket-newline': ['error', 'consistent'],
        'jsonc/array-bracket-spacing': 'error',
        'jsonc/comma-style': 'error',
        'jsonc/key-name-casing': [
            'error',
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
            'error', {
                consistent: true,
            },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
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
