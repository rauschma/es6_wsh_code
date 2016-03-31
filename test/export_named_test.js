/* global suite,test */

// EXERCISE: create the module impl/export_named.js so that this test passes

import assert from 'assert';

import {func} from '../impl/export_named';

suite('export_named_test');

test('func()', () => {
    assert.strictEqual(func(), 'hello');
});
