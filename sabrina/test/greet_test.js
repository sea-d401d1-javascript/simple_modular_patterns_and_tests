var greet_test = require(__dirname +  '/../greet');

var expect = require('chai').expect;

describe('greet function', function() {
  it('should greet a name', function() {
    expect(greet_test('user')).to.eql('Hello user');
  });
});

describe('command line input', function() {
  it('should show command line input', function() {
    expect(greet_test(process.argv[2])).to.eql('Hello undefined');
  });
});
