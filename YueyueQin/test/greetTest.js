var greet = require(__dirname + '/../greet'); //__diarname come from node to read local files
var expect = require('chai').expect; // module global object
var assert = require('chai').assert;

describe('Here is greet function test', function(){
  it('should greet a name', function(){
    expect(greet('Seattle')).to.equal('hello Seattle');
  });

  it('greet return value should be type of string', function() {
    assert(greet('Seattle'), 'string', 'greet is a string');
  });
});
