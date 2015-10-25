/* global suite */
/* global test */

import assert from 'assert';

suite('first_test');

test('Does the actual result equal the expected result?', () => {
    const WORLD = 'world';
    assert.equal(`Hello ${WORLD}!`, 'Hello world!');    
});
