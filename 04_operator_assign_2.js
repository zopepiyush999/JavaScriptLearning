var maleMarriageEligibility = function (gender, age, boyName){
    var check = ( gender=="Male" && age>=21) ? `Hey "${boyName}" you are eligible for Marriage.` : `Hey "${boyName}" you are not eligible for Marriage.`
    console.log(check);

}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Steve Jobs");

console.log("--------------------------------------------------------------------------------------------------------------------------------");

var femaleMarriageEligibility = function (gender, age, girlName){
    var check = ( gender=="Female" && age>=18) ? `Hey "${girlName}" you are eligible for Marriage.` : `Hey "${girlName}" you are not eligible for Marriage.`
    console.log(check);

}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");


