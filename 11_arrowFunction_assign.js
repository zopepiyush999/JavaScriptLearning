let display = ()=>{
    console.log(`Good Morning, Today is Monday`);
}
display();
console.log(`---------------------------------------------------`);


let mul = (n1, n2, n3) => {
    let multotal = n1 * n2 * n3;
    console.log(`Multiplication of given number is :- ${multotal}`);
}
mul(5, 5, 2);

let mult = (n1, n2, n3=1) => {
    let multTotal = n1 * n2 * n3;
    console.log(`Multiplication of given number is :- ${multTotal}`);
}
mult(10, 4);


console.log(`----------------------------------------------------`);


let value = (n1, n2, n3, n4, n5) => {
    let addTotal = n1 + n2 + n3 + n4 + n5;
    console.log(`Addition of given number is :- ${addTotal}`);
}
value(100, 100, 200, 349, 756);


let string = (n1, n2, n3, n4, n5) => {
    let stringTotal = n1 + n2 + n3 + n4 + n5;
    console.log(`The addition of string is :- ${stringTotal}`);
   
}
string("I am", "learning", "ES6", "features", "in depth");
