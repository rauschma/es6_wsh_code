/* global suite */
/* global test */

/* EXERCISE:
   - Copy support/weakmaps_private_data_es5.js to impl/weakmaps_private_data_es6.js
   - Use WeakMaps for private data, not property names with underscores
   - Make sure the tests still pass
*/

import assert from 'assert';

import {StringBuilder} from '../impl/weakmaps_private_data_es6.js';

suite('weakmaps_private_data');

test('Empty StringBuilder', () => {
    assert.equal(new StringBuilder().toString(), '');
});
test('Adding strings to a StringBuilder', () => {
    assert.equal(new StringBuilder().add('foo').add('bar').toString(), 'foobar');
});
