console.log("====== Shallow clone on arrayNum ======");
const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(arrayNums);
console.log(``);

console.log("====== Update array by using push() method ======");
console.log(arrayNums);
let arrayOfNum = arrayNums;
arrayOfNum.push(55, 66);
console.log(arrayOfNum);
console.log(``);

console.log("======= Deep clone by using spread operator in updated array ======");
console.log(arrayOfNum);
let newarray = arrayOfNum;
newarray.push(10, 25);
console.log(newarray);

console.log(`--------------------------------------------------------------------------------------------`);
let arrayEven = [2, 30, 14, 8]
console.log("Given Array is :- ");
console.log(arrayEven);
console.log(``);

console.log("====== Array merge or concat () by using spread operator =======");
let mergedArray = [...arrayEven, ...arrayOfNum];
console.log(mergedArray);
console.log(`--------------------------------------------------------------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "49,000 INR",
        aug_month: "50,000 INR",
        sept_month: "65,000 INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800-4567-32", "+91 9096 5678 77"]
}
//let emp = JSON.parse(JSON.stringify(employee_info));
console.log(employee_info);
console.log(``);

console.log("====== log employee details =======");
console.log("John Doe address is :- ", employee_info.address.locality);
console.log("Employee city is :- ", employee_info.address.city);
console.log("Employee state is :- ", employee_info.address.state);
console.log("Employee country is :- ", employee_info.address.country);
console.log(``);

console.log("John Doe number's is", employee_info.mobiles);
console.log(``);

console.log("====== Deep clone by using JSON stringify() ======");
console.log(`John Doe July month salary is :- ${employee_info.salary.july_month}`);
employee_info.salary.july_month = "80K";
console.log(`Updated John Doe July month salary is :- ${employee_info.salary.july_month}`);
console.log(``);

console.log(`John Doe country is :- ${employee_info.address.country}`);
employee_info.address.country = "United Kingdom";
console.log(`Updated John Doe country is :- ${employee_info.address.country}`);










