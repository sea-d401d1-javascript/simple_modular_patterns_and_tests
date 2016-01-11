var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe('steve\'s greet function', function() {
  it('should greet the TA', function() {
    expect(greet('test')).to.eql('Hello, test');
  });
});
