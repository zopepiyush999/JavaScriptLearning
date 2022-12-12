var square = function(num){
    console.log("Square of ",num, "=", num * num);
}
square(5);
square(6);
square(25);
square(100);

console.log("typeof square is :- ", typeof square);
console.log("================================================================");
var rectangle = function(length, width){
    console.log("Area of Rectangle is :- ", length * width);
}
rectangle(499,917);

console.log("================================================================");

var swapValuesDude = function(value1,value2){
    console.log("****** Before Swap Values ******");
    console.log(value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("******* After Swap Values ******");
    console.log(value1, value2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("================================================================");

var string = "JS the most popular language";
console.log("Given string is :- ", string);
console.log("Total character available in the string :- ", string.length);
console.log("Character at index 6 :- ", string.charAt(6));
console.log("Character at index 11 :- ", string.charAt(11));
var lastChar = string.length;
console.log("Last character :-", string.charAt(lastChar-1));
console.log("First character :-", string.charAt());
console.log("Length of string :-", string.length);
var square = string.length * string.length;
console.log("Square of length is :-", square);