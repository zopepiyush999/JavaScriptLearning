console.log(`======= Personal details ========`);
const personal = {
    name : "Piyush Zope",
    mobileNo : 7507860200,
    place : "Bhusawal",
    education : "MCA"
}
console.log(personal);
console.log(``);

console.log(`======= College Details ======= `);
const college = {
    clgName : "Dr.D Y Patil Institute of MCA and Management",
    location : "Pune",
    university : "Savitribai Phule Pune University",
    department : 2
}
console.log(college);
console.log(``);

console.log(`======= Merge two object personal details and college ========`);
const mergeObject = Object.assign({}, personal, college);
console.log(mergeObject);
console.log(``);

console.log(`======= Creating array of friends name =======`);
let array = ["Aniket", "Manasi","Tanvi","Gayatri"]
console.log(array);
console.log(``);

console.log(`====== Array after freezing and iterating by using for of loop =======`);
for (const iterator of array) {
    console.log(iterator);
}
console.log(``);

console.log(`======= Reversing String word =======`);
let string = "Codemind Technology";
function reverse(array){
    return array.split('').reverse().join('');
}
console.log(`The Given String is :- Codemind Technology`);
console.log("Codemind", reverse('Technology'));