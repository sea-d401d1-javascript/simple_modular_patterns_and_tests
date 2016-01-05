var greet_test = require(__dirname +  '/../greet');

var expect = require('chai').expect;

describe('greet function', function() {
  it('should greet a name', function() {
    expect(greet_test('test')).to.eql('hello test');
  });
});
