module.exports = function(name){
    return 'Hello ' + name;
};
console.log(module.exports(process.argv[2] + '!'));
