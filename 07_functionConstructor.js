function Student(name, rollNo, age) {
  this.name = name;
  this.rollNo = rollNo;
  this.age = age;
}
Student.prototype.country = "India";
let vinny = new Student("Vinny", 111, 23);
let jenny = new Student("Jenny", 22, 35);
let minny = new Student("Minny", 55, 23);
let tommy = new Student("Tommy", 66, 35);
console.log(vinny);
console.log(jenny);
console.log(minny);
console.log(tommy);
console.log(vinny.country);
console.log(minny.country);
console.log(jenny.country);
console.log(tommy.country);




// Arrav
// const array0fNum = [3, 5, 6, 8, 91];
// let arrayLen = array0fNum. length;
// arrayOfNum.push(10) ; 
// arrayOfNum.pop();
// arravOfNum.unshift();