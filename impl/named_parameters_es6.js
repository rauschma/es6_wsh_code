import assert from 'assert';

export default function handleNamedParameters(
        { x=0, y=0, color='black' } = {}) {
    return [x, y, color];
}
