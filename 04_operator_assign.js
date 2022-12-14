var squareOfWordLength = function (value) {

    console.log(`\n The length of word "${value}" is :- ${value.length} and Square is :- ${value.length*value.length}`);
    
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log("-----------------------------------------------------------------------------------------------------------");


var string = function(){
    var str = `I am Angular Developer`; 
    var result = str.split(" ");
    console.log(` The Given string is :- "${str.length}" and Total number of word in string is :- "${result.length}"`); 
    console.log(`\n After dividing length by total number of word is :- "${str.length/result.length}"`);
    console.log("-----------------------------------------------------------------------------------------------------------");
    console.log(`\n The string length is :- "${str.length} and Multiply by total word available in string is :- ${str.length*result.length}`);
}
string();
