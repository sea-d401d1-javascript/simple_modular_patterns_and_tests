module.exports = function(name) {
  return 'hello ' + name;
};

if(!process.argv[2]) { // if user passes no argument in command line
  console.log('no argument passed');
}
else {  // if user passes an argument in command line
  console.log(module.exports(process.argv[2]));
}
