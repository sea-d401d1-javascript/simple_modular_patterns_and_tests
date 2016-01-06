var greet = require(__dirname + '/../scripts/greet');
var expect = require('chai').expect;
process.argv[2] = 'bob';

describe('the greet function', function() {// eslint-disable-line
  it('should greet a name', function() {// eslint-disable-line
    expect(greet('jesse')).to.eql('hello jesse');
  });
});

describe('the command line greet', function() {// eslint-disable-line
  it('should show process argv', function() {// eslint-disable-line
    expect(greet()).to.eql('hello bob');
  });
});
