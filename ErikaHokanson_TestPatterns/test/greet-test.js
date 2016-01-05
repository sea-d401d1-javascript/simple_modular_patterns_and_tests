var greet = require(__dirname + '/../greet');
var greet2 = require(__dirname + '/../greet2');
var expect = require('chai').expect;

describe('the greet function', function() {
  it('aloha Rikki', function() {
    expect(greet('test')).to.eql('aloha test');
  });

  it('makes banana splits');

  it('melts in the sun', function() {
    throw new Error('halt error');
  });
});

describe('greet 2 won\'t you', function() {
  it('howdy doody', function() {
    expect(greet2.greet('test')).to.eql('aloha test two');
  });
});
