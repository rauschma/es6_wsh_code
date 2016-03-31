# About this project

Main directories:

* `test/`: unit tests
* `impl/`: the solutions to the tests
* `support/`: helper files and templates

Other files and directories:

* `data/`: data for the tests
* `jsconfig.json`: config file for Visual Studio Code
* `node_modules/`: the packages installed by npm
* `package.json`: the npm configuration file for this project
* `README.md`: this file

Installation:

```text
cd es6_wsh_code/

npm install

mv impl impl_orig
mkdir impl
```

Run unit tests (based on mocha) via:

```
npm test test/foo_test.js
```
