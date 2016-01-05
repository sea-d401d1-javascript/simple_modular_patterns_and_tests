var greet = function(name) {
  return 'hello ' + name;
};

exports.greet = greet;

var msg = [];
(exports.handleCmd = function(cmdArgs) {
  if (cmdArgs.length > 2) {
    var args = cmdArgs.slice(2);
    msg = args.map(function(arg) {
      return greet(arg);
    });
  }
  return msg;
})(process.argv);

if (msg.length) {
  msg.forEach(function(m) {
    console.log(m);
  });
}
