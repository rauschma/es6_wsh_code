/* global test */

/* EXERCISE:
   - Copy this file to impl/co_test_impl.js
   - Start an HTTP server via:
     npm run http-server
   - Change the code so that it uses the co library and the test still passes
*/

import assert from 'assert';

import {readFile} from 'fs';
import * as path from 'path';

import fetch from 'isomorphic-fetch';

test('Download and parse JSON file', (done) => {
    fetch('http://localhost:8080/bond.json')
    .then(request => request.text())
    .then(jsonStr => {
        let json = JSON.parse(jsonStr);        
        assert.deepEqual(json, {
            first: 'Jane',
            last: 'Bond',
        });
        done();
    })
    .catch(error => {
        console.log('Error downloading JSON file: ' + error);
    });
});
