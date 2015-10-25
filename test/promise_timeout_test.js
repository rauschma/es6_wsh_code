/* global suite */
/* global test */

// EXERCISE: implement promise_timeout.js
// Imported: function timeout(ms, promise) { ··· }

import assert from 'assert';

import { timeout } from '../impl/promise_timeout';

suite('promise_timeout_test');

test('Waiting longer than timeout must cause error', (done) => {
    timeout(500, delay(1000))
    .then(() => {
        // No timeout occurred: error!
        throw new Error('Promise did not time out with error');
    })
    .catch(() => {
        // Everything is OK
        done();
    });
});

//----- Helper function

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}
