class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_comapny){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_comapny;
    }
}
const emp_anil = new Employee( 22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log("TCS Employee detail is :- ");
const arrayOfEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
arrayOfEmployee.forEach((currentValue) => {
    if (currentValue.emp_company == "TCS"){ 
        console.log(`Employee name is :- ${currentValue.emp_name}, Company name is :- ${currentValue.emp_company}`);
    }
});
console.log(``);

console.log("Employee salary greater than equal to 50000 detail is :- ");
arrayOfEmployee.forEach((currentValue) => {
    if(currentValue.emp_salary >= 50000){  
        console.log(currentValue);
    }
});
console.log(``);


let sum = 0;
arrayOfEmployee.forEach((currentValue) => {
    sum = sum + currentValue.emp_salary;
});
console.log(`Sum of all the employee salary is :- ${sum}`);
console.log(``);

let avg = 0;
arrayOfEmployee.forEach((currentValue) => {
    avg = sum/arrayOfEmployee.length;
});
console.log(`The Average salary of all the employee is :- ${avg}`);
console.log(``);

console.log("IT and HR department employee whose salary is greater than 75000 ");
arrayOfEmployee.forEach((currentValue) => {
    if((currentValue.emp_dept = "IT" || currentValue.emp_dept == "HR") && currentValue.emp_salary >= 75000) {
        console.log(currentValue);
    }
});