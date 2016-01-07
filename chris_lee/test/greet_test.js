var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;
process.argv[2] = 'dummy';

describe('the greet function', function() {
  it("passes a parameter from command line into greet function", function() {
      expect(greet(process.argv[2])).to.eql('hello dummy');
  });

  it('should do something');

  it('fails on an error', function() {
    throw new Error('threw an error');
  });
});
