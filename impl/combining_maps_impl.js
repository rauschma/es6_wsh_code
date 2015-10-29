/* global test */

import assert from 'assert';

test('TODO', () => {
    let map1 = new Map()
    .set(1, 'one')
    .set(2, 'two');
    let map2 = new Map()
    .set(3, 'three')
    .set(4, 'four');
    let combined = new Map([...map1, ...map2]);
    assert.deepEqual([...combined], [
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
    ]);
});
