/* global suite,test */

/* EXERCISE:
   - Start an HTTP server via:
     npm run http-server
   - Create a file impl/fetchJson.js so that the test passes
*/

import assert from 'assert';

import fetchJson from '../impl/fetchJson'

suite('fetch_json_test');

test('URL to JSON object', () =>
    fetchJson('http://localhost:8080/bond.json')
    .then(json => {
        assert.deepEqual(json, {
            first: 'Jane',
            last: 'Bond',
        });        
    })
);
