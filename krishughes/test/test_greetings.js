var greetings = require(__dirname + '/../lib/greetings');
var expect = require('chai').expect;

describe('the greetings function', function() {
  it('should greet a name', function() {
    expect(greetings.greet('test')).to.eql('hello test');
  });
});
  //Bonus: testing to see if name passed through command line.
  //it('should not be undefined', function() {
  //  expect(process.argv[2]).to.be.a('string');
  //});
  /*beforeEach(function() { 
    this.processBackup = process.argv;
    process.argv = ['node', 'hellos.js'];
  });

  afterEach(function() {
  	process.argv = this.processBackup;
  });

  it('should greet the world with no process.argv', function() {
    expect(greetings.greet()).to.eql('hello world');
  });
});

describe('with a name specified', function() {
  beforeEach(function() {
  	this.processBackup = process.argv;
  	process.argv = ['node', 'hellos.js', 'test'];
  });

  afterEach(function() {
    process.argv = this.processBackup;
  });

  it('should greet test', function() {
  	expect(greetings.greet('test')).to.eql('hello test');
  });
});*/