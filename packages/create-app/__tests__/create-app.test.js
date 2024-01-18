'use strict';

const createApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(createApp(), 'Hello from createApp');
console.info('createApp tests passed');
