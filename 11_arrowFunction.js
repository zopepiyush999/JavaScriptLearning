let show = ()=>{
    console.log("Hello");
}
show(); 

// => function Syntax
// let fun = ()=>{

// };

// Arrow Function with argument
let sum = (n1, n2)=>{
    console.log(n1+n2);
}
sum(10, 10);

// Arrow Function with argument and return value
let multiply = (n1, n2)=> {
    let mul = n1*n2;
    return mul;
}
let mulResult = multiply(5, 5);
console.log(mulResult);


// Second way to write arrow function
let add = (n1, n2) => console.log(n1 + n2);
add(12, 24);