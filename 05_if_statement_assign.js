var checkEligibility = function(age) {
        if(age>=18 && age<=120){
            console.log(`Your age is ${age} :- You are eligible for voting.`);
        }
        if(age<18 && age>0){
            console.log(`Your age is ${age} :- You are not eligible for voting.`);
        }
        if(age<=0 || age>=120){
            console.log(`Your age is ${age} :- This is Invalid data.`);
        }

}
checkEligibility(45);
checkEligibility(17);
checkEligibility(8);
checkEligibility(20);
checkEligibility(-10);
checkEligibility(200);
checkEligibility(0);

console.log("\n");
console.log("------------------------------------------------------------------------------------------------");
console.log("\n");

var gradeCalculation = function(marks){
    if(marks>=90 && marks<100){
        console.log(`Fantastic marks :- ${marks}, Your grade is A+ `);
    }
    if(marks>=75 && marks<=90){
        console.log(`Excellent marks :- ${marks}, Your grade is A `); 
    }
    if(marks>=50 && marks<=75){
        console.log(`Good marks :- ${marks}, Your grade is B `);
    }
    if(marks>=35 && marks<=50){
        console.log(`Marks is :- ${marks}, Your grade is C, Need Improvement. `);
    }
    if(marks<=0 || marks>100){
        console.log(`Marks is :- ${marks}, Please provide the valid marks. `);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);