var greetings = require('./greetings');
console.log(greetings.greet('Joe'));
//Bonus
var greets = (process.argv[2] || 'world');
console.log(greetings.greet(greets));
//input your name after program name in command line 'node hellos.js Luke'
