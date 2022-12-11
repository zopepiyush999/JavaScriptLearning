function display(){
    console.log("My name is : Piyush");                 //  Function Defination
    console.log("My surname is : Zope");
}
display();                  //      Function call or Function Invocation



//  Write a function show which should log your college name
function show(){
    console.log("My college name is: Dr.D Y Patil Institute of Master of Computer Application and Management, Pune ")
}
show(); 



function swapValues(value1, value2){
    console.log("Before Swapping :- ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swapping :- ",value1, value2);

}
swapValues(100, 200);
swapValues(2, 4);
swapValues("You", "Me");
swapValues("Vaibhav", "Kalpesh");


console.log("******* Function with arguement and return values ******")

function rajuBhaiya(paisa){
    console.log("Going to the market", paisa);
    console.log("Purchased fresh vegetables", paisa);
    console.log("Come back");
    return bagOfVegetables;
}
var bagOfVegetables = rajuBhaiya(100);
console.log(bagOfVegetables);