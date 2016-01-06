var greet = require(__dirname + '/../lib/greet_module.js').greet;
var expect = require('chai').expect;

describe('Greeting Module', function() {
  describe('greet()', function() {
    it('Should return "hello [name]" where [name] is a string argument provided to the function.', function() {
      expect(greet('person')).to.equal('hello person');
      expect(greet('people person')).to.equal('hello people person');
    });
    it('Should return "Error: Greet() has been provided an invalid [name] argument.  [name] must be a string." when a [name] argument provided to the function is not a string.', function() {
      expect(greet(true)).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
      expect(greet(1)).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
      expect(greet(1.0)).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
      expect(greet({})).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
      expect(greet([])).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
      expect(greet(null)).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
      expect(greet(function(){})).to.equal('Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.');
    });
    it('Should return "hello stranger" when a [name] argument is undefined.', function() {
      expect(greet()).to.equal('hello stranger');
    });
  });
});
