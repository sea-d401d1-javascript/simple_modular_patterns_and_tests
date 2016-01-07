module.exports = function(name) {
  if (!name) {
    return 'hello ' + process.argv[2];
  }
    return 'hello ' + name;
};
