require('babel-polyfill');
require('babel-register');
require('source-map-support/register');

const server = require('./src/server');

server();
