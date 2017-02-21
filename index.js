require('babel-polyfill');
require('babel-register');
require('source-map-support/register');

const life = require('./src/life');

life();
