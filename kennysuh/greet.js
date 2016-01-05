if(process.argv[2]) {
  console.log('hello ' + process.argv[2]);
}

exports.greet = function(name) {
  return 'hello ' + name;
};
