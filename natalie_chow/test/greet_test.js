var greetings = require(__dirname + '/../greet');
var expect = require('chai').expect;

describe('The greet module', function() {
  it('should generate greeting with specified name', function() {
    expect(greetings.greet('world')).to.eql('hello world');
  });

  it('should handle arguments being passed through console', function() {
    var cmdArgs = ['node', 'greet.js', 'Marco', 'Polo'];
    expect(greetings.handleCmd(cmdArgs)[0]).to.eql('hello Marco');
    expect(greetings.handleCmd(cmdArgs)[1]).to.eql('hello Polo');
  });
});
