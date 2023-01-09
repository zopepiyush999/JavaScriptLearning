const array_number = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_number.forEach((currentValue, index) => {
    console.log(`Value is "${currentValue}" and its index is "${index}"`);
});
console.log(``);

const arrayPositive = [];
array_number.forEach((currentValue) => {
    if(currentValue >= 0 ){
        arrayPositive.push(currentValue);
    }
});
console.log("Positive number present in the array is :- ", arrayPositive);
console.log(``);

const arrayNegative = [];
array_number.forEach((currentValue) => {
    if(currentValue < 0 ){
        arrayNegative.push(currentValue);
        //console.log(currentValue);
    }
});
console.log("Negative number present in the array is :- ", arrayNegative);
console.log(``);

const arrayEven = [];
array_number.forEach((currentValue) => {
    if(currentValue %2 == 0 ){
        arrayEven.push(currentValue);
    }
});
console.log("Even number present in the array is :- ", arrayEven);
console.log(``);


let total = 0;
    array_number.forEach(number => {
    total += number; 
});
console.log("The sum of all the number present in the array is :- ", total);
console.log(``);

const evenPosition = [];
array_number.forEach((currentValue, index) => {
    if(index % 2 == 0){
        evenPosition.push(currentValue);
    }
});
console.log("The even positioned of array index is :- ",evenPosition);
