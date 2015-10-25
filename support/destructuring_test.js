/* global suite */
/* global test */

/* EXERCISE:
   - Copy this file to impl/destructuring_test_impl.js
   - Change the code so that it uses destructuring and the tests still pass
*/

import assert from 'assert';

suite('destructuring_test');

let obj = {
    first: 'Jane',
    last: 'Doe',
};

test('Properties of the object', () => {
    // BEGIN: use destructuring here
    let first = obj.first;
    let last = obj.last;
    // END: use destructuring here
    
    assert.equal(first, 'Jane');
    assert.equal(last, 'Doe');    
});

test('Properties of a property descriptor', () => {
    let desc = Object.getOwnPropertyDescriptor(obj, 'first');
    
    // BEGIN: use destructuring here
    let value = desc.value;
    let writable = desc.writable;
    let enumerable = desc.enumerable;
    let configurable = desc.configurable;
    // END: use destructuring here
    
    assert.equal(value, 'Jane');
    assert.equal(writable, true);
    assert.equal(enumerable, true);
    assert.equal(configurable, true);
});
