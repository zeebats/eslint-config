/* eslint-disable unicorn/prefer-module */

const { ESLint } = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', async t => {
	const eslint = new ESLint();
	const results = await eslint.lintFiles('**/*.js');

	for (const result of results) {
		t.comment(result.filePath);
		t.equal(result.errorCount, 0);
	}

	t.end();
});
