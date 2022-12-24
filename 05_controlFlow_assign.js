//Count total number of vowels

var sentence = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log();   
    count = count + 1;
    
  }
}
console.log(`Given string is :-- I am very good IT Developer `);
console.log(`Total number of vowels present in the string :- ${count}`);

console.log('----------------------------------------------------------------------------');

// Write a function to get the sum of cube of number 1 to 5

function cube(num){
  var sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += index * index * index;
  }
    console.log(`Sum of cube of number 1 to 5 is :- `, sum);
    return sum;
}
cube(5);

console.log('----------------------------------------------------------------------------');
//How to print odd position characters of an array of strings in Javascript and do not consider empty space?

// function oddPositionedChars(value){
//   var string1 = "Hard work always pays back";
//   odd = [];
//   even = [];
//   string1 = string1.replace(/\s/g, '');
//   for (var i = 0; i < string1.length; i++) {
//     (i % 2 === 0) ? even.push(string1[i]) : odd.push(string1[i])
//   }
//   console.log(`Given string is :- `,string1);
//   console.log(`Odd character present in string :-`, odd.join(''));

//   console.log('----------------------------------------------------------------');

//   var string2 = "Soon I will be Angular IT Champ";
//   odd = [];
//   even = [];
//   string2 = string2.replace(/\s/g, '');
//   for (var i = 0; i < string2.length; i++) {
//     (i % 2 === 0) ? even.push(string2[i]) : odd.push(string2[i])
//   }
//   console.log(`Givern string is :- `,string2);
//   console.log(`Odd character present in string :-`, odd.join(''));
// }
// oddPositionedChars();

var string1 = "Hard work always pays back";
var string2 = "Soon I will be Angular IT Champ";
function oddPositionedChars(string) {
  let result = "";
  let spaceRemoved = string.split(" ").join(" ");
  for (let index = 0; index < spaceRemoved.length; index++) {
    if (index % 2 != 0) {
      result = result + spaceRemoved[index];
    }
  }
  console.log(`Given string is :- ${string}`)
  console.log(`Odd character present in string :- `, result);
}
oddPositionedChars(string1);
oddPositionedChars(string2);