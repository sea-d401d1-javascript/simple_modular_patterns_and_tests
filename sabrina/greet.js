module.exports = function(name){
  if(process.argv[2] == undefined) {
    return 'Hello ' + name;
  } else {
    return 'Hello ' + process.argv[2];
  }
};
