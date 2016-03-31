/* global suite,test */

// EXERCISE: create the module impl/export_default.js so that this test passes

import assert from 'assert';

import func from '../impl/export_default';

suite('export_default_test');

test('func()', () => {
    assert.strictEqual(func(), 'hello');
});
