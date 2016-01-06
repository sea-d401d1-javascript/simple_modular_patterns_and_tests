var processArgs = process.argv.slice(2,process.argv.length);
processArgs.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

console.log(process.argv[2]);
module.exports = function(name) {
  if(name){
    return 'Hello ' + name;
  }else{
    return process.argv[2];
  }
};
