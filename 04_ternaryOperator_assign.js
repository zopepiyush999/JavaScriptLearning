var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName){
    var check = gradScore==70 || hscScore==80 || sscScore==90 ? `\n Hey ${candidateName} you are eligible for TCS interview.` : `\n Hey ${candidateName} Unfortunately you are not eligible for TCS interview.`
    console.log(check);
}
interviewEligibility(80,86,90,"Piyush");
interviewEligibility(70,65,55,"Aniket"); 
interviewEligibility(60,79,88,"Manasi");