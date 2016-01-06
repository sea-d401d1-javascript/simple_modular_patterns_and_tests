module.exports = function(name) {
	return 'hello ' + name + '.';
};

console.log(module.exports(process.argv[2]));
