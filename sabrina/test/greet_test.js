var greet_test = require(__dirname +  '/../lib/greet');

var expect = require('chai').expect;

describe('greet function', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node', 'hello.js'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should greet a name', function() {
    expect(greet_test('user')).to.eql('Hello user');
  });
});

describe('command line input', function() {
  beforeEach(function() {
    this.processBackup = process.argv;
    process.argv = ['node', 'hello.js', 'test'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should show command line input', function() {
    expect(greet_test(process.argv[2])).to.eql('Hello test');
  });

  it('fails on an error', function() {
      throw new Error('some test error');
  });

});
