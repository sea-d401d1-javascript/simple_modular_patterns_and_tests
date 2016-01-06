var greet = require(__dirname + '/../lib/greet'); //__diarname come from node to read local files
var greet2 = require(__dirname + '/../lib/greet2');
var hello = require(__dirname + '/../hello.js');
var expect = require('chai').expect; // module global object
var assert = require('chai').assert;


describe('Here is greet function test', function(){
  it('should greet a name', function(){
    expect(greet('Seattle')).to.equal('hello Seattle');
  });

  it('greet return value should be type of string', function() {
    assert.typeOf(greet('Seattle'), 'string', 'greet is a string');
  });
});

describe('Here is greet2 function test ', function() {
  it('should have a second greeting coming along', function() {
    expect(greet2.greet('Seattle')).to.equal('hello again from Seattle');
  });
});

describe('Here is greet function command line test ', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node','hello.js'];
  });
  afterEach(function() {
    process.argv = this.processBackup;
  });
  it('should greet the world with no process.argv', function() {
    expect(hello()).to.eql('hello world');
  });
});


describe('hello with a name specified', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node', 'hello.js', 'success'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should greet test', function() {
    expect(hello()).to.eql('hello success');
  });
});
