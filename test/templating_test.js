/* global suite,test */

/* EXERCISE: Create impl/templating.js so that the test passes.
*/

import assert from 'assert';

import {template} from '../impl/templating'

suite('templating_test');

test('JSON to table', () => {
    const data = [
        { first: 'Lars', last: 'Croft' },
        { first: 'Jane', last: 'Bond' },
    ];
    assert.strictEqual(template(data).trim(),
`<table>
    <tr><td>Croft</td><td>Lars</td></tr>
    <tr><td>Bond</td><td>Jane</td></tr>
</table>`);
});
