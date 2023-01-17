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

const arrayOfEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("All the Employee from Wipro Company.");
const arrayFilterEmployees = arrayOfEmployees.filter((Employee) => {
    return Employee.emp_company == "Wipro";
});
arrayFilterEmployees.forEach((currentValue) => {
    console.log(currentValue);                                          // we log by using (currentValue.emp_name, currentValue.emp_company) this also
});
console.log(``);

console.log("Find all the Employee from IT & HR department.");
const arrayFindEmployees = arrayOfEmployees.filter((Employee) => {
    return Employee.emp_company == "IT" || "HR";
});
arrayFindEmployees.forEach((currentValue) => {
    console.log(currentValue);
});
console.log(``);

console.log("Find all the Employee whose emp_id is greater than 50.");
const arrayEmployees = arrayOfEmployees.filter((Employee) => {
    return Employee.emp_id > 50;
});
arrayEmployees.forEach((currentValue) => {
    console.log(currentValue);
});
console.log(``);

console.log("Find all the Employee whose name start with A or V or M");
const arrEmoloyees = arrayOfEmployees.filter((Employee) => {
    return Employee.emp_name = ("a") || ("V") || ("M");
});
arrEmoloyees.forEach((currentValue) => {
    console.log(currentValue);
});

console.log("Find average salary of the employee for all the department");
let sum = 0;
arrayOfEmployees.forEach((currentValue) => {
    sum = sum + currentValue.emp_salary;
});
// console.log(`Sum of all the employee salary is :- ${sum}`);
console.log(``);

let avg = 0;
arrayOfEmployees.forEach((currentValue) => {
    avg = sum/arrayOfEmployees.length;
});
console.log(`The Average salary of all the employee is :- ${avg}`);
console.log(``);

console.log("Find the average salary for IT department");
const arrayAvgEmployee = arrayOfEmployees.filter((Employee) => {
    return Employee.emp_dept = "IT";
});
arrayAvgEmployee.forEach((currentValue) => {
    console.log(currentValue)
});