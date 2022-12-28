const professor = {
   name : "piyush",
   age: 26,
   city: "pune",
   height: 6,
   weight: 84,
   degrees : {
    graduation : "BSC",
    post_graduation: "MCA",
    PHD : "Adv Computing",
    add : function (){
        return this.graduation + this.post_graduation + this.PHD;
        },
   },
    certificates : {
        certificates_1: "Hacker Rank Participation",
        certificates_2: "Certificates in IFE course",
        certificates_3: "Certificate in Adv Programming",
        },
};
console.log(`==== All the properties ====`);
console.log(professor);
console.log(``);

console.log(`==== nested object degree ====`);
console.log(professor.degrees);
console.log(``);

console.log(`==== Add one more nested object certificates ====`);
console.log(professor.certificates);
console.log(``);

console.log(`==== Concat all the degrees and print as a string ====`);
const totalDegree = professor.degrees.add()
console.log(`Total degree: ${totalDegree}`);
console.log(``);    

console.log(`==== Try to add new property number ====`);
professor.phoneNumber = 7507860200;
console.log(`phoneNumber : ${professor.phoneNumber}`)
console.log(``);

console.log(`==== Modify or Updating an property into an object ====`);
professor.age = 25;
console.log(professor);
console.log(``);

console.log(`==== Delete any one Certificate from nested object ====`);
console.log(professor.certificates);
delete professor.certificates.certificates_3;
console.log(professor.certificates);
console.log(``);

console.log(`==== Add new Certificates in nested object ====`);
console.log(professor.certificates);
professor.certificates.certificates_3 = "Certificate in Angular UI Development";
console.log(professor.certificates);
console.log(``);

console.log(`==== Nested object Certificates ====`);
console.log(professor.certificates);
