var myName;             //  Variable Declaration
myName = "Piyush Zope";  //  Variable Initialization 
console.log(myName);


var myFrdName = "Sachin Tendulkar";  // Variable Declaration Initialization at the same time
console.log(myFrdName);

myFrdName = "MS Dhoni";     //  Variable Update
console.log(myFrdName);



console.log("======= Learning Undefined ======");
var country;                //      Variable Declaration
console.log(country);

var country = "India";      //      Variable Initialization
console.log(country);



console.log("****** Learning typeof ******");
var age = 26;
var ageType = typeof age;
console.log(ageType);
console.log(typeof age);



console.log("*** Strongly type and Loosely Type ***");
var microsoftOwner = "Bill Gates";
console.log(typeof microsoftOwner);                 //  typeof value String

var microsoftOwner = 45;
console.log(typeof microsoftOwner);                 //  typeof value number

var microsoftOwner = true;
console.log(typeof microsoftOwner);                 //  typeof value Boolean