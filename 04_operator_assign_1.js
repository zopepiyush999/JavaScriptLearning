var greatest = function(value1, value2){
    result = value1 > value2 ? value1 : value2 ;
    console.log(`The greatest number among ${value1} and ${value2} is :-`, result);
}
greatest(10,-10);
greatest(800,899);


console.log("-----------------------------------------------------------------------------");

var number = function(value){
    var check = value%2==0 ? "EVEN"  : "ODD";
    console.log(`The number ${value} is`, check);
    return check;
}
number(23);
number(44);
number(0);
number(101);

console.log("-----------------------------------------------------------------------------");

var length = function(value){
    var result = value.length;
    var check = result%2==0 ? "EVEN" : "ODD";
    console.log(`The length of word "${value}" is`, check);
    return check;
}
length("JavaScript");
length("Developer");
length("Google");