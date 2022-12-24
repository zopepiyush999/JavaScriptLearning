// Factorial of the number 5,7,8,12

function factorialNumber(number) {
  var fact = 1;
  for (var i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${number} is :- `, fact);
  return fact;
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);