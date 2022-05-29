/* eslint-disable unicorn/prefer-module */

const importPlugin = require('./plugins/import');

module.exports = {
    rules: {
        ...importPlugin,
    },
};
