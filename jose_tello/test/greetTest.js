var greet  = require('../greet.js');
var expect = require('chai').expect;

describe('greet', function() {
	it('Should greet when called', function() {
		expect(greet('jose')).to.eql('hello jose.');
	});
	it('Should test whatever argument passed to function', function() {
		expect(greet(process.argv[2])).to.eql('hello ' + process.argv[2] + '.');
	});
});