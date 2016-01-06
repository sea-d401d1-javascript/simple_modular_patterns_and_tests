var greet = require(__dirname+'/greet');

var hello = module.exports = function() {
  var greeting = greet(process.argv[2] || 'user');
  console.log(greeting);
  return greeting;
};

hello();
