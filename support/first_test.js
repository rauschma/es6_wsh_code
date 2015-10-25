/* global suite */
/* global test */

/* EXERCISE:
   - Copy this file to impl/first_test_impl.js
   - Change the code so that the test passes
*/

import assert from 'assert';

suite('first_test');

test('Does the actual result equal the expected result?', () => {
    const WORLD = 'universe';
    assert.equal(`Hello ${WORLD}!`, 'Hello world!');    
});
