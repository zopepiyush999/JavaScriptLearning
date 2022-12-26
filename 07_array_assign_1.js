const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);

console.log("=========== Adding Papaya Element Before Banana ==========");
var fruit_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
fruit_seasonal.unshift("Papaya");
console.log(fruit_seasonal);

console.log("=========== Remove Mango from Array ==========");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
let spliceResult = fruit_seasonal.splice(3,12);
console.log(fruit_seasonal);


console.log("============== Insert Element Pineapple at the last Position ================");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
fruit_seasonal.push("Pineapple");
console.log(fruit_seasonal);

console.log("============= Insert Dragon Fruit before Water Melon ===========");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
var spliceRes = fruit_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruit_seasonal);

console.log("=============== Replace Orange with Kiwi =================");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
var spliceRes = fruit_seasonal.splice(1, 1, "Kiwi");
console.log(fruit_seasonal);

console.log("============ Log element starting from 1 to 4 Postion ==========");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
let sliceRes = fruit_seasonal.slice(0,4);
console.log(sliceRes);

console.log("============ Log Last 3 element by using length ==========");
var fruit_seasonal = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit_seasonal);
let sliceResult = fruit_seasonal.slice(2,fruit_seasonal.length);
console.log(sliceResult);











