// By using break statement
var index = 0;
while(index <= 10){
    console.log(index);
    if(index == 5){
        break;
    }
    index++;
}

console.log('----------------------------------------------------------------');
// By using continue statement
// var index = 0;
// while(index <= 10) {
//     console.log(index); // 0 1 2 3
//     if (index==7) {
//         continue;
//     }
// }

for (let index = 0; index < 6; index++) {
    //console.log(index); // 0 1 2 3
    if (index==3) {
        continue;
    }
    console.log(index);
}