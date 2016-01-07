var exports = module.exports = {};
exports.greet = function(name) {
    return('hello ' + name);
};
console.log(exports.greet(process.argv[2]));