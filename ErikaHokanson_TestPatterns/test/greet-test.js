var greet = require(__dirname + '/../greet');
var greet2 = require(__dirname + '/../greet2');
var expect = require('chai').expect;
process.argv[2] = 'Wanda';

describe('the greet function', function() {
  it('should say hi to person passed through test', function() {
    expect(greet('test')).to.eql('aloha test');
  });
});

describe('the greet function again', function() {
  it('should say another hello to person passed through test', function() {
    expect(greet2.greet('test')).to.eql('aloha test two');
  });
});

describe('command line utility test', function() {
  it('print to terminal', function() {
    expect(greet(process.argv[2])).to.eql('aloha ' + 'Wanda');
  });
});
