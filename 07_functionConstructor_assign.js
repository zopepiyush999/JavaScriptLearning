class Bank{
    constructor(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    }
        
}
Bank.prototype.message = (`  The open time of the sbi Bank is "9 AM IST" and close time is "6 PM IST"`);
Bank.prototype.message1 = (`  The open time of the axis Bank is "9 AM IST" and close time is "6 PM IST"`);
Bank.prototype.message2 = (`  The Bank name is "yes Bank". Branch code is "9852". Open time of the "yes bank" is "9 PM IST"`);

let yesBank = new Bank("YES Bank", "Pune", "YES000053", "9852");
let sbiBank = new Bank("SBI Bank", "Akurdi", "SBIN001638", 4556);
let maharashtraBank = new Bank("Maharashtra Bank", "Alandi", "MAHB005472", 0656);
let axisBank = new Bank("AXIS Bank", "Moshi", "AXIS000087", 2195);

console.log(`(1)`);
console.log(`  Bank details is:- "Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC: ${yesBank.ifscCode}, Code: ${yesBank.branchCode}`);
console.log(`  Bank details is:- "Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC: ${sbiBank.ifscCode}, Code: ${sbiBank.branchCode}`);
console.log(`  Bank details is:- "Bank Name: ${maharashtraBank.bankName}, Location: ${maharashtraBank.location}, IFSC: ${maharashtraBank.ifscCode}, Code: ${maharashtraBank.branchCode}`);
console.log(`  Bank details is:- "Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC: ${axisBank.ifscCode}, Code: ${axisBank.branchCode}`);
console.log(``);

console.log(`5)`);
console.log(yesBank.message);
console.log(``);
console.log(`6)`);
console.log(yesBank.message1);
console.log(``);
console.log(`7)`);
console.log(yesBank.message2);