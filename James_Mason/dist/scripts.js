var greet = function(name) {
  if (typeof name === 'undefined') {
    return 'hello stranger';
  } else {
    if (typeof name === 'string') {
      return 'hello ' + name;
    } else {
      return 'Error: Greet() has been provided an invalid [name] argument.  [name] must be a string.';
    }
  }
};

exports.greet = greet;
