var greet = require(__dirname + '/../lib/greet');
var expect = require('chai').expect;
process.argv[2] = 'dummy';

describe('the greet function', function() { //eslint-disable-line
    it('passes a parameter from command line into greet function', function() { // eslint-disable-line
        expect(greet(process.argv[2])).to.eql('hello dummy');
    });

    it('should do something'); // eslint-disable-line

    it('fails on an error', function() { // eslint-disable-line
        throw new Error('threw an error');
    });
});
