/* eslint-disable unicorn/prefer-module */

module.exports = {
    rules: {
        'vuejs-accessibility/media-has-caption': 'off',
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
            {
                registeredComponentsOnly: false,
            },
        ],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 'off',
        'vue/no-empty-component-block': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/v-on-function-call': 'error',
    },
};
