var greet = require(__dirname +  '/../greet');
var expect = require('chai').expect;
process.argv[2] = 'Ardian'

describe('the greet function', function(){
  it('should greet a name', function(){
    expect(greet('Ardian')).to.eql('Hello Ardian');
  });
});

describe('the command line greet', function(){
  it('should greet a name', function(){
    expect(greet(process.argv[2])).to.eql('Hello Ardian');
  });
});
