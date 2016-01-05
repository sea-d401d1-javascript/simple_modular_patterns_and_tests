var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;
process.argv[2] = 'bob';

describe('the greet function', function() {
  it('should greet a name', function() {
    expect(greet('jesse')).to.eql('hello jesse');
  });
});

describe('the command line greet', function() {
  it('should show process argv', function() {
    expect(greet()).to.eql('hello bob');
  });
});
