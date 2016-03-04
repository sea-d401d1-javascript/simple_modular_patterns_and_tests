var hello = require(__dirname +  '/../hello');
var expect = require('chai').expect;

describe('hello function', function() {
  beforeEach(function(){
    this.processBackup = process.argv;
    process.argv = ['node', 'hello.js'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should greet the world with no process.argv', function() {
    expect(hello()).to.eql('hello world');
  });
});

describe('with a name specifies', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node', 'hello.js', 'test'];
  });
  afterEach(function(){
    process.argv = this.processBackup;
  });

  it('shoutld greet test', function() {
    expect(hello()).to.eql('hello test');
  });
});
