// Greet Function
var greetFn = function(name) {
  return 'Hello ' + name;
};

if (process.argv.length > 2) {
  console.log(greetFn(process.argv[2]));
}

exports.greet = greetFn;
