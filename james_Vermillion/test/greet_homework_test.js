//simple test for mocha to see if the greet function works
var greeter = require(__dirname + '/../greetModule');
var expect = require('chai').expect;

//test greetModule.js -- verifies the output of the function
describe('the homework greet function', function() {
  it('should greet the name test', function() {
    expect(greeter.greet('test')).to.eql('hello test');
  });
});