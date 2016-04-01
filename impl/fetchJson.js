import fetch from 'isomorphic-fetch';

export default function (url) {
    return fetch(url)
    .then(request => request.text())
    .then(jsonStr => JSON.parse(jsonStr));    
}
