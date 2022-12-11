function myFunction(){
    console.log("I love JavaScript");    
}
myFunction();
function yourFunction(){
    console.log("JavaScript is case sensitive language");
}
yourFunction();


function personalDetails(firstName, lastName, collegeName){
    console.log("================================================================");
    console.log("First Name :- ", firstName);
    console.log("Last Name :- ", lastName);
    console.log("College Name :- ", collegeName);
}
personalDetails("Piyush","Zope","Dr.D Y Patil Institute of Master of Computer Application and Management, Pune");

console.log("================================================================");
function swapValuesDude(value1,value2){
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


function addThreeValues(value1,value2,value3){
    console.log("After adding Values:- ", value1 + value2 + value3); 

}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");