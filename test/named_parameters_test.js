/* global suite */
/* global test */

/* EXERCISE:
   - Copy support/named_parameters_es5.js to impl/named_parameters_es6.js
   - Change the code so that it uses destructuring and the tests still pass
*/

import assert from 'assert';

import handleNamedParameters from '../impl/named_parameters_es6';

suite('named_parameters_test');

test('All named parameters', () => {
    assert.deepEqual(
        handleNamedParameters({ x: 1, y: 2, color: 'red' }),
        [1, 2, 'red']);
});

test('Omitting named parameters', () => {
    assert.deepEqual(
        handleNamedParameters({ x: 1, y: 2 }),
        [1, 2, 'black']);
    assert.deepEqual(
        handleNamedParameters({ color: 'red' }),
        [0, 0, 'red']);
    
    assert.deepEqual(
        handleNamedParameters({}),
        [0, 0, 'black']);
});

test('Omitting named parameter object', () => {
    assert.deepEqual(
        handleNamedParameters(),
        [0, 0, 'black']);    
});
