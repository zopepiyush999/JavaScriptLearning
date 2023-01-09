console.log(city);

var city = "Pune";


let state = "MH";
console.log(state);

show();
                                                        // function access / declare before initialization. keyword var is already Hosted 
function show(){
    console.log("Hello I am in show");                  // let and Const Keyword are never hosted
}

display();
var display = function(){                               // function expression is not access before declaration
    console.log("Hello I am in display");
}