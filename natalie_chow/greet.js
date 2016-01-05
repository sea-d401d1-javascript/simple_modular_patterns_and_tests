var greet = function(name) {
  return 'hello ' + name;
};

exports.handleConsole = (function(cmdArgs) {
  if (cmdArgs.length > 2) {
    var args = cmdArgs.slice(2);
    args.forEach(function(arg) {
      console.log(greet(arg));
    });
  }
})(process.argv);

exports.greet = greet;
