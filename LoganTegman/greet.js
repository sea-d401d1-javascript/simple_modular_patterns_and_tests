'use strict';

const greetConsole = require(__dirname + '/lib/greeter').greetConsole;

console.log(greetConsole(process.argv));
