Array.prototype.map.call(process.argv, function(arg, index) { //can also use forEach, but map is faster
  console.log(index + ': ' + arg);
});
