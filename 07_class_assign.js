console.log(`1`);
class Vehicle{
    constructor(comapnayName, color, fuelType, engine){
        this.comapnayName = comapnayName;
        this.color = color;
        this.fuelType = fuelType;
        this.enegine = engine;
    }
}
let product1 = new Vehicle("Yamaha", "grey/blue", "Petrol", "149cc");
let product2 = new Vehicle("Kawasaki ", "green/black", "Petrol", "900cc");
let product3 = new Vehicle("Royal Enfield", "Matt Black", "Petrol", "350cc");
let product4 = new Vehicle("Honda", "Black", "Petrol", "149cc");
let product5 = new Vehicle("JAWA", "Olive green", "Petrol", "350cc")
console.log(`====== Define class of Vehicle should contain properties, attributes, data member and constructor ======`);
console.log(product1);
console.log(``);
console.log(product2);
console.log(``);
console.log(product3);
console.log(``);
console.log(product4);
console.log(``);
console.log(product5);

console.log(`2`);
class College{
    constructor(collegeName, location, department, university){
        this.collegeName = collegeName;
        this.location = location;
        this.department = department;
        this.university = university;
    }
    details(){
        console.log(this.collegeName,this.department,this.location,this.university);
    }
}
let college1 = new College("P.O.Nahata College", "Bhusawal", "5", "KBCNMU Jalgaon");
let college2 = new College("Dr.D.Y.Patil International University", "Pune", "12", "SPPU Pune");
let college3 = new College("SSGB College of Engineering", "Bhusawal", "6", "BATU Raigad");
let college4 = new College("Cummmins Junior College", "Pune", "4", "SNDT Mumbai");
console.log(`\n===== Define a class of College shoul contain properties, attributes, data member and constructor and member function =====`);
console.log(``);
college1.details();
college2.details();
college3.details();
college4.details();


console.log(`3`);
function traverseObject(values){
    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(college1);
console.log(``);
traverseObject(college2);
console.log(``);
traverseObject(college3);
console.log(``);
traverseObject(college4);
console.log(``);