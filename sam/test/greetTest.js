var greet = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe("The Greet Function", function(){
	it('should return "Hello" followed by a name', function(){
		expect(greet.greet('Sam')).to.equal('Hello Sam');
	})
})

// Couldn't figure out the test for the 
// second extra point