var greet = require(__dirname + '/../lib/greet').greet;
var expect = require('chai').expect;

describe('the greet function', function() {
    it('should greet the person\'s name', function() {
        expect(greet('test')).to.eql('hello test');
    });
});
