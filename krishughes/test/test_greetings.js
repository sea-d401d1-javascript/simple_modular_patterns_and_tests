var greetings = require(__dirname + '/../greetings');
var expect = require('chai').expect;

describe('the greetings function', function() {
  it('should greet a name', function() {
    expect(greetings.greet('test')).to.eql('hello test');
  });
  //Bonus: testing to see if name passed through command line.
  it('should not be undefined', function() {
    expect(process.argv[2]).to.be.a('string');
  });
});