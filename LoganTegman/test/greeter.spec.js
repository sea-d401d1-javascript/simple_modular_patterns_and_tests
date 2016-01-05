'use strict';

const expect = require('chai').expect;
const greeter = require(__dirname + '/../lib/greeter');
const greet = greeter.greet;
const greetConsole = greeter.greetConsole;

describe('greet function', () => {
  it('should return greeting', () => {
    expect(greet('World')).to.equal('Hello World');
  });
});

describe('greetConsole function', () => {
  it('should handle console arguments', () => {
    // first two are simulating first two node args
    const args = ['node', '/path/to/current/file', 'World'];
    expect(greetConsole(args)).to.equal('Hello World');
  });
});
