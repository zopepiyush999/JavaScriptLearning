const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log(``);

console.log("========  Find total number available in array ========");
var arrayOfNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let totalElements = arrayOfNumbers.length;
console.log(`Total number is :- ${totalElements}`);
console.log(``);

console.log("======== Find first and last element in arrayOfNumber ========");
let firstLastNumber = arrayOfNumbers[0];
console.log(`Element at first index :- ${arrayOfNumbers[0]}`);
console.log(`Element at last index :- ${arrayOfNumbers[10]}`);
console.log(``);

console.log("======== Log third last element using length property =======");
var result = arrayOfNumbers[arrayOfNumbers.length - 3];
console.log(`Element at third last position :- ${result}`);
console.log(``);

console.log("======== Log all even number present in array =======");
let evenNumArray = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
  const element = arrayOfNumbers[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(evenNumArray);
console.log(``);

console.log("======== Log all odd number present in array =======");
let oddNumArray = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
  const element = arrayOfNumbers[index];
  if (element % 2 != 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(oddNumArray);
console.log(``);

console.log("======== Log all even number positioned in array using for loop =======");
let evenNumArr = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenNumArr = evenNumArr.concat(element);
  }
}
console.log(evenNumArr);
console.log(``);

console.log("======== Log all odd number positioned in array using for loop =======" );
let oddNumArr = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddNumArr = oddNumArr.concat(element);
  }
}
console.log(oddNumArr);
console.log(``);

console.log("======== Find sum of all the element =======");
let sumOfTotal = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    const element = arrayOfNumbers[i];
    sumOfTotal = sumOfTotal + element;
}
console.log(`Sum of all the element is :- ${sumOfTotal}`);
console.log(``);

console.log("======== Find the number which are multiple of 5 ========");
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(multiple);    
console.log(``);

console.log("======== 115 Number available in string =======");
var isAvailable = arrayOfNumbers.includes(115);
console.log(isAvailable);
console.log(``);

console.log("======== 23 Number available in string =======");
var isAvailable = arrayOfNumbers.includes(23);
console.log(isAvailable);
console.log(``);

console.log("======== Insert number 55, 66 before index 3 =======");
console.log(arrayOfNumbers);
arrayOfNumbers.splice(3, 0, 55, 66);
console.log(arrayOfNumbers);
console.log(``);

console.log("======== Delete 3 elements starting from index 4 =======");
console.log(arrayOfNumbers);
let spliceResult = arrayOfNumbers.splice(4,6);
console.log(arrayOfNumbers);

