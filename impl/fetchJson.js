import fetch from 'isomorphic-fetch';

export default function (url) {
    return fetch(url)
    .then(response => response.text())
    .then(jsonStr => JSON.parse(jsonStr));    
}
