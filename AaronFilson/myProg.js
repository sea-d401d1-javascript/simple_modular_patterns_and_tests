var greet = require(__dirname + '/greet.js');
/*eslint-disable no-console */
//Keep the eslint from throwing an error about this by-design behavior
console.log(greet('world'));
/*eslint-enable */
