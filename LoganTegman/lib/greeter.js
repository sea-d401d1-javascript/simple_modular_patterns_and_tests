'use strict';

exports.greet = name => 'Hello ' + name;
exports.greetConsole = args => exports.greet(args[2]);
