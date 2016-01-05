//import from greetHomework.js
var greeter = require('./greetModule');
//start with empty name
var name = '';

//get any args and add them to name (helper function)
function putNameTogether(j){
  name  += " " + process.argv[j] ;
}

//EXTRA CREDIT 1): ADD ARGS TO THE GREETER TO MAKE IT A COMMAND LINE APP
if (process.argv.length > 2){
  //classic fencepost start
  name += process.argv[2];
  for(var i = 3; i < process.argv.length; i++){  
    //send to helper putNameTogether()
    putNameTogether(i);
  }
}

//print it to the screen
console.log(greeter.greet(name));