var greet = require( __dirname + "/greet" );
var prompt = require( __dirname + '/node_modules/prompt');

prompt.start();

prompt.get(["name"] , function ( err , result ){
	console.log(greet(result.name));
});


