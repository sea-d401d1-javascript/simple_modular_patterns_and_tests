//simple test for mocha to see if the greet function works
var greeter = require(__dirname + '/../greetModule');
var arger = require(__dirname + '/../get_argv');
var expect = require('chai').expect;

//test greetModule.js -- verifies the output of the function
describe('the homework greet function', function() {
  
  it('should greet the name test', function() {
    expect(greeter.greet('test')).to.eql('hello test');
  });

});

//test for extra credit 2: make sure arguments are being processed
describe('test that the arguments are being processed', function() {
  it('should string together from second arg on', function() {
    expect(arger(['node', 'file_name', 'testing 1', '2', '3'])).to.eql('testing 1 2 3');
  });
});