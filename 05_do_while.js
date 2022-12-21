// Print numbers from 0 to 10
// initialization 0   condition <=10   update expr = ++

var index = 0;
do {
    console.log(index);
    index++;
} while (index <= 10);

console.log('----------------------------------------------------------------');
// Print the table of 7 by decrementing each time 7 ----> 70 63 56 49 .....7
// Initialization 70    conditions >=70    update expr = i - 7

var index = 70;
do {
    console.log(index);
    index=index - 7
} while (index >= 7);