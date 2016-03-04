var greet = require(__dirname +  '/lib/greet');

var hello = exports = module.exports = function() {
  var greeting = greet(process.argv[2] || 'world');
  console.log(greeting);//eslint-disable-line
  return greeting;
};

hello();
