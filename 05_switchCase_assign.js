  function monthOfYear(monthNumber){
  switch (monthNumber) {
    case 1:
      console.log(`{monthNumber} This month is January`);
      break;
    case 2:
      console.log(`"${monthNumber}" This month is February`);
      break;
    case 3:
      console.log(`"${monthNumber}" This month is March`);
      break;
    case 4: 
      console.log(`"${monthNumber}" This month is April`);
      break;
    case 5:
      console.log(`"${monthNumber}" This month is May`);
      break;
    case 6:
      console.log(`"${monthNumber}" This month is June`);
      break;
    case 7:
      console.log(`"${monthNumber}" This month is July`);
      break;
    case 8:
      console.log(`"${monthNumber}" This month is August`);
      break;
    case 9:
      console.log(`"${monthNumber}" This month is September`);
      break;
    case 10:
      console.log(`"${monthNumber}" This month is October`);
      break;
    case 11:
      console.log(`"${monthNumber}" This month is November`);
      break;
    case 12:
      console.log(`"${monthNumber}" This month is December`);
      break;
    default:
      console.log(`"${monthNumber}" This month is not exists, Please enter a valid month.`);
      break;
  }
}

monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);



