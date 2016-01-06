var greet = exports = module.exports = function(name) { //saves a function in module.exports and gives that a key word exports all within the variable greet
  return 'hello ' + name;
};

console.log('hello from inside hello.js');
