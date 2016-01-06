var greet = require(__dirname + '/lib/greet.js');

var hello = module.exports = function() {
  var greeting = greet(process.argv[2] || 'world');
  return greeting;
};

hello();
