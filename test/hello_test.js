var hello = require(__dirname + '/../hello');
var expect = require('chai').expect;

describe('the hello function', function() {
  it('should greet a name', function() {
    expect(hello('test')).to.eql('hello test');
  });
});
