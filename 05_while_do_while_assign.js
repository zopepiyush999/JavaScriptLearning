// WAP to print number from 5 to 15 by incrementing 

var index = 5;
while (index <= 15) {
    console.log(index);
    index++;
    
}

console.log('-------------------------------');
// WAP to print number from 50 to 40 by decrementing 1

var index = 50;
while (index >=40){
    console.log(index);
    index--;
}

console.log('-------------------------------');
//WAP to find first 15 odd numbers

var index = 0;
while (index <=15 ){
    if(index % 2 != 0){
        console.log(index);
    }
    index ++;
}

console.log('-------------------------------');
//WAP to find first 10 Even numbers

var index = 0;
while(index <= 10){
    if(index % 2 == 0){
        console.log(index);
    }
    index++;
}

console.log('-------------------------------');
//WAP to print table of 5 like --->  5 10 15 20 25 ....  50

var index = 5;
do {
    console.log(index);
    index = index + 5;
} while (index <= 50 );

console.log('-------------------------------');
//WAP to print table of 10 like --->  10 20 30  40 ....  100

var index = 10;
do {
    console.log(index);
    index = index +10;
} while (index <=100);

console.log('-------------------------------');
//WAP to print table of 10 in reverse order like ---> 100 90 80 70 .....10

var index = 100;
do {
    console.log(index);
    index = index -10
} while (index >=10);