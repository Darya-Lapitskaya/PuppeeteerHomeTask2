//const path = require('path');

module.exports = {
    color: true,
    extentions: ['js', 'cjs', 'mjs'],
    parallel: false,
    recursive: false,
    reporter: 'spec',
    retries: 1,
    sort: false,
    spec: ['src/tests/**/newTest.js'], // the positional arguments!
    timeout: '200000',
    ui: 'bdd',
};