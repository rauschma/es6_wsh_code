/* global suite,test */

/* EXERCISE:
   - Run this test (it should initially fail):
     npm test test/first_test.js
   - Create a file impl/first.js so that the test passes
     (Tip: you want to export a `const` declaration.)
*/

import assert from 'assert';

import {ANSWER} from '../impl/first'

suite('first_test');

test('Does the actual result equal the expected result?', () => {
    assert.strictEqual(ANSWER, 42); // actual, expected
});
