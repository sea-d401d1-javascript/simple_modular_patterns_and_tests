var processArgs = process.argv.slice(2,process.argv.length);
processArgs.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

exports.process = processArgs;
