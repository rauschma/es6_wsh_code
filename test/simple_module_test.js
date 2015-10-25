/* global suite */
/* global test */

// EXERCISE: create the module impl/simple_module.js so that this test passes

import assert from 'assert';

import { func } from '../impl/simple_module';

suite('simple_module_test');

test('func()', () => {
    assert.equal(func(), 'hello');
});


