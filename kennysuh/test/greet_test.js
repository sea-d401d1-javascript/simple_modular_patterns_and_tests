var greet = require(__dirname + '/../greet').greet;
var result = require(__dirname + '/../greet').result;
var expect = require('chai').expect;

describe('the greet function', function() {
  it('should greet my input', function() {
    expect(greet('bobby flay')).to.eql('hello bobby flay');
  });
});

describe('command line args', function() {
  it('should greet my input from cmd line', function() {
    expect(result).to.eql(undefined);
  });
});
