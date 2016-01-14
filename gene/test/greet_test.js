var greet = require (__dirname + '/../greet');
var expect = require ('chai').expect;

describe ('GT\'s Big Friendly Greet Function', function(){
  it('should say Hello Dolly!', function(){
    expect(greet('Dolly')).to.eql('Hello Dolly!')
  });
});
