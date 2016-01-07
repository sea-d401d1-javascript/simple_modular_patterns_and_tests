if(process.argv[2]) {
  console.log('hello ' + process.argv[2]);
  exports.result = 'hello ' + process.argv[2]
} else {
  exports.result = undefined;
}

exports.greet = function(name) {
  return 'hello ' + name;
};
