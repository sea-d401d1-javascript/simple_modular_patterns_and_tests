var greet = require(__dirname + '/../greet'); //__diarname come from node to read local files
var greet2 = require(__dirname + '/../greet2');
var greet3 = require(__dirname + '/../greet3');
var processArgs = greet3.process;
var expect = require('chai').expect; // module global object
var assert = require('chai').assert;
console.log(greet3);


describe('Here is greet function test', function(){
  it('should greet a name', function(){
    expect(greet('Seattle')).to.equal('hello Seattle');
  });

  it('greet return value should be type of string', function() {
    assert.typeOf(greet('Seattle'), 'string', 'greet is a string');
  });
});

describe('Here is greet2 function test ', function() {
  it('should have a second greeting coming along', function() {
    expect(greet2.greet('Seattle')).to.equal('hello again from Seattle');
  });
});

describe('Here is greet3 function text ', function() {
  it('should process the arguments', function() {
    // assert.lengthOf(greet3, 2);
    // expect(greet3).to.equal('hello Seattle');
  });
});
