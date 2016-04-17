import {resolve} from 'path';
import {readdir,stat} from 'fs';
import denodeify from 'denodeify';

const readdirAsync = denodeify(readdir);
const statAsync = denodeify(stat);

export function listFiles(filepath) {
    return statAsync(filepath)
    .then(stats => {
        if (stats.isDirectory()) {
            return readdirAsync(filepath)
            // Ensure result is deterministic
            .then(childNames => childNames.sort())
            .then(sortedNames =>
                Promise.all(
                    sortedNames.map(childName =>
                        listFiles(resolve(filepath, childName)) ) ) )
            .then(subtrees => {
                return flatten(subtrees);
            });
        } else {
            return [ filepath ];
        }
    });    
}

function flatten(arr) {
    return [].concat(...arr);
}