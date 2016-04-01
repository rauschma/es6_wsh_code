import {resolve,basename} from 'path';
import {readdir,stat} from 'fs';
import denodeify from 'denodeify';

const readdirAsync = denodeify(readdir);
const statAsync = denodeify(stat);

export function listFiles(filepath) {
    return statAsync(filepath)
    .then(stats => {
        if (stats.isDirectory()) {
            return readdirAsync(filepath)
            .then(childnames => {
                childnames.sort();
                return Promise.all(
                    childnames.map(childname =>
                        listFiles(resolve(filepath, childname))
                    )
                )
                .then(subtrees => {
                    return flatten(subtrees);
                });
            });
        } else {
            return [ basename(filepath) ];
        }
    });    
}

function flatten(arr) {
    return [].concat(...arr);
}