/* global test */

import assert from 'assert';

test('The `let` test', () => {
    let x = 3;
    assert.equal(x, 3);
    {
        let x = 12; // inserted line
        assert.equal(x, 12);
    }
    assert.equal(x, 3);
});
