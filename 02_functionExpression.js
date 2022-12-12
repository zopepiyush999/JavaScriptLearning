var myName = "Piyush";
console.log(myName);


// Function Expression

var showResult = function(){
    console.log("Show.....");
}
showResult();

//  We can store a function as a value in JS

var subtraction = function(num1, num2){
    var result = num1 - num2;
    console.log("Subtraction...", result);
    return result;
}
var result = subtraction(4, 2);
console.log(result);