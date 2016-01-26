 /* eslint-env node, mocha */
 var path = require('path');
 var greet = require(path.join(__dirname, '/../greet'));
 var expect = require('chai').expect;

 describe('The Greet Function', function() {
   it('should return "Hello" followed by a name', function() {
     expect(greet.greet('Gene')).to.equal('Hello Gene');
   });
 });
