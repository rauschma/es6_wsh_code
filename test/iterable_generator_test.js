/* global suite */
/* global test */

// EXERCISE: create the module impl/iterable_generator.js so that these tests pass

import assert from 'assert';

import { naturalNumbers } from '../impl/iterable_generator';

suite('iterable_generator_test');

test('First element via destructuring', () => {
    let [a] = naturalNumbers();
    assert.deepEqual([a], [0]);
});
test('First three elements via destructuring', () => {
    let [a, b, c] = naturalNumbers();
    assert.deepEqual([a, b, c], [0, 1, 2]);
});
test('First five elements via destructuring', () => {
    let [a, b, c, d, e] = naturalNumbers();
    assert.deepEqual([a, b, c, d, e], [0, 1, 2, 3, 4]);
});
