var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe('the greet function', function(){
  it('greet the name', function(){
    expect(greet('Aaron')).to.eql('hello Aaron');
  });
});
