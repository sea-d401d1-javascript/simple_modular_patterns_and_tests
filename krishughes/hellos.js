var greetings = require('./greetings');
console.log(greetings.greet('Joe'));
//Bonus
console.log(greetings.greet(process.argv[2]));
//input your name after program name in command line 'node hellos.js Luke'