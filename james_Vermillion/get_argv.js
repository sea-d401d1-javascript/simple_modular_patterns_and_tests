  module.exports = function(argv){
    //start with empty name
    var name = '';
  
    //get any args and add them to name (helper function)
    function putNameTogether(j){
      name  += " " + argv[j] ;
    }
  
    //EXTRA CREDIT 1): ADD ARGS TO THE GREETER TO MAKE IT A COMMAND LINE APP
    if (argv.length > 2){
      //classic fencepost start
      name += argv[2];
      for(var i = 3; i < argv.length; i++){  
        //send to helper putNameTogether()
        putNameTogether(i);
      }
    }
    //return name
    return name;
  };