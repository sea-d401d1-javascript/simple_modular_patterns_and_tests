var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe('the greeting function', function() {
  it('greets by name', function() {
    expect(greet('test')).to.equal('hello test');
  });
});
