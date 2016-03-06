//this can be run from the console to say hello to the arguments provided.

//import from greetHomework.js & get_argv
var greeter = require('./greetModule');
var argGetter = require('./get_argv');

//get name from arguments
var name = argGetter(process.argv);

//print it to the screen
console.log(greeter.greet(name));
