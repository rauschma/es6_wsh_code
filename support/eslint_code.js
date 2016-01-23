/* EXERCISE:
   - Copy this file to impl/eslint_code_impl.js
   - Change the code so that this command succeeds:
     npm run lint impl/eslint_code_impl.js
*/

var obj = {
    foo: 123,
    bar: 'abc'
};
for (let key of Object.keys(obj)) {
    console.log(key)
}
const counter = 0;
counter++;
