function counterCharA(string) {
  var counter = 0;
  for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (char == "a" || char == "A") {
      console.log(char);
      counter = counter + 1;
    }
  }
  console.log(`${string}${counter}`);
}
counterCharA(`I AM Learning JavaScript, The Language of internet :- `);

console.log("---------------------------------------------------------------");

counterCharA(`My favourite movie is LAggAn :- `);
