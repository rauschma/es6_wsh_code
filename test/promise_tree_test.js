/* global suite,test */

// EXERCISE: create impl/promise_tree.js so that this test passes

/* Start promise_tree.js like this:
import {resolve} from 'path';
import {readdir,stat} from 'fs';
import denodeify from 'denodeify';

const readdirAsync = denodeify(readdir);
const statAsync = denodeify(stat);
*/

import assert from 'assert';
import * as path from 'path';

import {listFiles} from '../impl/promise_tree';

suite('promise_tree_test');

const TEST_DIR = path.resolve(module.filename, '../promise_tree_test_dir');
test('All files are listed', () => {
    return listFiles(TEST_DIR)
    .then(files => {
        assert.deepStrictEqual(files, [
            path.resolve(TEST_DIR, 'bar.txt'),
            path.resolve(TEST_DIR, 'foo.txt'),
            path.resolve(TEST_DIR, 'subdir', 'baz.txt'),
        ]);
    });
});
