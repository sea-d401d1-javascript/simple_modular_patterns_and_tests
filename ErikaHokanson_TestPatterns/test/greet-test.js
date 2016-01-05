var greet = require(__dirname + '/../greet');
var greet2 = require(__dirname + '/../greet2');
var expect = require('chai').expect;

describe('the greet function', function() {
  it('aloha Rikki', function() {
    expect(greet('test')).to.eql('aloha test');
  });
});

describe('hey there\'s dessert', function() {
  it('hey now', function() {
    expect(greet2.greet('test')).to.eql('aloha test two');
  });
});
