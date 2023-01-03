// Shallow Cloning
console.log("====== Array Shallow Cloning ======");
let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// Deep Cloning
console.log("====== Array Deep Cloning ======");
let arrayOfNumber = [0, 2, 4, 6, 8 ];
let arrayClone =  [... arrayOfEvenNum]; // Deep Cloning
arrayOfNumber[2] = 100;
arrayClone[2] = 200;
console.log(arrayOfNumber);
console.log(arrayClone);

console.log(" ====== array merge or concat====== ");
let arrayNum = [0, 2, 4, 6, 8 ];
let arrayNumb = [1, 2, 3, 4];
let concatArray = arrayNum.concat(arrayNumb); // array merge using concat()
console.log(arrayNum);
console.log(arrayNumb);
console.log(concatArray);

console.log("Array merge or concat using spread operator ");
let mergeArray = [...arrayNum, ... arrayNumb];
console.log(mergeArray);