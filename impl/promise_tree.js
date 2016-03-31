import {resolve} from 'path';
import {readdir,stat} from 'fs';
import denodeify from 'denodeify';

const readdirAsync = denodeify(readdir);
const statAsync = denodeify(stat);

export function listFiles(dir) {
    return readdirAsync(dir)
    .then(filenames => {
        filenames.sort();
        return Promise.all(
            filenames.map(filename => {
                const filepath = resolve(dir, filename);
                return statAsync(filepath)
                .then(stats => {
                    if (stats.isDirectory()) {
                        return listFiles(filepath);
                    } else {
                        return [filename];
                    }
                });
            }))
        .then(subtrees => {
            return flatten(subtrees);
        });
    });
}

function flatten(arr) {
    return [].concat.apply([], arr);
}