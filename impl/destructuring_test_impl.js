/* global suite */
/* global test */

import assert from 'assert';

suite('destructuring_test');

let obj = {
    first: 'Jane',
    last: 'Doe',
};

test('Properties of the object', () => {
    // BEGIN: use destructuring here
    let {first, last} = obj;
    // END: use destructuring here
    
    assert.equal(first, 'Jane');
    assert.equal(last, 'Doe');    
});

test('Properties of a property descriptor', () => {
    let desc = Object.getOwnPropertyDescriptor(obj, 'first');
    
    // BEGIN: use destructuring here
    let {value,writable,enumerable,configurable} = desc;
    // END: use destructuring here
    
    assert.equal(value, 'Jane');
    assert.equal(writable, true);
    assert.equal(enumerable, true);
    assert.equal(configurable, true);
});
