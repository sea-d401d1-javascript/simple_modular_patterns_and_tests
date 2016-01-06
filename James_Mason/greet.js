var greet = require(__dirname + '/lib/greet_module.js').greet;

if (process.argv.length === 3) {
  console.log(greet(process.argv[2]));
} else {
  console.log(greet());
}
