export function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        promise.then(resolve, reject);
        setTimeout(function () {
            reject(new Error('Timeout after '+ms+' ms'));
        }, ms);
    });
}
