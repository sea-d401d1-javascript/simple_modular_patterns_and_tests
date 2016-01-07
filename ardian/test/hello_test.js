var hello = require(__dirname +  '/../hello');
var expect = require('chai').expect;

describe('hello function', function() {//eslint-disable-line
  beforeEach(function(){//eslint-disable-line
    this.processBackup = process.argv;
    process.argv = ['node', 'hello.js'];
  });

  afterEach(function() {//eslint-disable-line
    process.argv = this.processBackup;
  });

  it('should greet the world with no process.argv', function() {//eslint-disable-line
    expect(hello()).to.eql('hello world');
  });
});

  describe('with a name specifies', function() {//eslint-disable-line
    beforeEach(function() {//eslint-disable-line
      this.processBackup = process.argv;
      process.argv = ['node', 'hello.js', 'test'];
    });
    afterEach(function(){//eslint-disable-line
      process.argv = this.processBackup;
    });

    it('shoutld greet test', function() {//eslint-disable-line
      expect(hello()).to.eql('hello test');
    });
  });
