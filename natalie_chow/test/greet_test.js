var greetings = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe('The greet function', function() {
  it('should generate greeting with specified name', function() {
    expect(greetings.greet('world')).to.eql('hello world');
  });
});
