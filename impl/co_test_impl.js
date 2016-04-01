/* global test */

import assert from 'assert';

import fetch from 'isomorphic-fetch';
import co from 'co';

test('Download and parse JSON file', () =>
    co(function* () {
        try {
            let request = yield fetch('http://localhost:8080/bond.json');
            let jsonStr = yield request.text();
            let json = JSON.parse(jsonStr);
            assert.deepEqual(json, {
                first: 'Jane',
                last: 'Bond',
            });
        } catch (error) {
            console.log('Error downloading JSON file: ' + error);
        }
    })
);
