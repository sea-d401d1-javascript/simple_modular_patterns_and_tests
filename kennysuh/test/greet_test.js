var greet = require(__dirname + '/../greet').greet;
var expect = require('chai').expect;

describe('the greet function', function() {
  it('should greet my input', function() {
    expect(greet('bobby flay')).to.eql('hello bobby flay');
  });
});
