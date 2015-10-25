/* global test */

/* EXERCISE:
   - Copy this file to impl/let_test_impl.js
   - Insert a single(!) line so that all tests pass
*/

import assert from 'assert';

test('The `let` test', () => {
    let x = 3;
    assert.equal(x, 3);
    {
        assert.equal(x, 12);
    }
    assert.equal(x, 3);
});
