/* global suite,test */

// EXERCISE: implement impl/promise_timeout.js
// Imported: function timeout(ms, promise) { ··· }

import assert from 'assert';

import { timeout } from '../impl/promise_timeout';

suite('promise_timeout_test');

test('Waiting longer than timeout must cause error', () => {
    return timeout(500, delay(1000))
    .then(() => {
        // No timeout occurred: error!
        throw new Error('Promise did not time out with error');
    })
    .catch(() => {
        // Everything is OK
    });
});
test('Must pass on Promise result', () => {
    return timeout(0, Promise.resolve(123))
    .then(result => {
        assert.strictEqual(result, 123);
    })
    .catch(() => {
        throw new Error('Unexpected rejection');
    });
});
test('Must pass on Promise rejection', () => {
    return timeout(0, Promise.reject(123))
    .then(result => {
        throw new Error('Unexpected resolution');
    })
    .catch(reason => {
        assert.strictEqual(reason, 123);
    });
});

//----- Helper function

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}
