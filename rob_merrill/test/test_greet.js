var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe('the greet function', function(){
  it('should greet a name', function(){
    expect(greet('Rob')).to.eql('hello Rob');
  });


});
