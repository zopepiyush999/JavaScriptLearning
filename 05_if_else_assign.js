var votingEligibility = function (age) {
    if (age <= 0 || age > 120) {
      console.log(`Invalid data:- ${age}`);
    } else {
      console.log(`Valid data`);
      if (age >= 18) {
        console.log(`Congratulation your age is "${age}", you can vote.`);
      } else {
        console.log(`Sorry you are not eligible for vote, your age is "${age}."`);
      }
    }
  };
  votingEligibility(45);
  votingEligibility(17);
  votingEligibility(8);
  votingEligibility(20);
  votingEligibility(-10);
  votingEligibility(200);
  votingEligibility(0);

console.log("--------------------------------------------------------------------------------------------------------------------------");
  var gradeCalculation = function(marks) {
    if(marks<=0 || marks>100){
        console.log(`\n Invalid marks :- ${marks}. \nPlease provide a valid marks.`);
    } else{
        console.log(`\n Valid marks`);
        if(marks>=90){
            console.log(`Fantastic marks :- ${marks}, Your grade is A+ `);
        }
        else if(marks>=75 && marks<=90){
            console.log(`Excellent marks :- ${marks}, Your grade is A`);
        }
        else if(marks>=50 && marks<=75){
            console.log(`Good marks :- ${marks}, Your grade is B `);
        }
        else{
            console.log(`Marks is :- ${marks}, Your grade is C, Need Improvement. `);
        }
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
