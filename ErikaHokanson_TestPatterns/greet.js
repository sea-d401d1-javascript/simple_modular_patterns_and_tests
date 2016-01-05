module.exports = function(name) {
  return 'aloha ' + name;
};

console.log('aloha from inside greet');

// print process.argv
// Use array: 0 is node, 1 is greet.js, 2 is anything you enter - any name on the planet for example
console.log(module.exports(process.argv[2]));
