const array_roll = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("Reverse the array");
array_roll.reverse();
console.log(array_roll);
console.log(``);

console.log("Use the sort() method");
array_roll.sort();
console.log(array_roll);
console.log(``);

console.log("Sort the array in ascending order");
array_roll.sort((a,b) => {
    return a > b ? 1 : -1;
});
console.log(array_roll);
console.log(``);

console.log("Greatest number from the array");
let arrayGreat = array_roll[array_roll.length-1];
console.log(arrayGreat);
console.log(``);

console.log("Smallest number from the array");
let arraySmall = array_roll[0];
console.log(`${array_roll[0]}`);
console.log(``);

console.log("Remove duplicate from the array");
let arrayLDuplicate = [... new Set(array_roll)];
console.log(arrayLDuplicate);



