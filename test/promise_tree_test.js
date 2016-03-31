/* global suite,test */

// EXERCISE: create impl/promise_tree so that this test passes
// These import statements may be useful:
// import {resolve} from 'path';
// import {readdir,stat} from 'fs';
// import denodeify from 'denodeify';


import assert from 'assert';
import * as path from 'path';

import {listFiles} from '../impl/promise_tree';

suite('promise_tree_test');

test('', () => {
    return listFiles(path.resolve(module.filename, '../promise_tree_test_dir'))
    .then(files => {
        assert.deepStrictEqual(files, [
            'bar.txt',
            'foo.txt',
            'baz.txt',
        ]);
    });
});
