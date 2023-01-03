class Bank{
    constructor(bank_name, location, account_no, ifsc, interest_rate){
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
    }
}
console.log("====== Create Bank Object ======");
const axis_bank = new Bank("Axis Bank", "Akurdi", 85637812938, "AXIS00984", "11%");
console.log(axis_bank);
const sbi_bank = new Bank("State Bank of India", "Pune", 8542378423, "SBIN0017563", "10.5");
console.log(sbi_bank);
const icici_bank = new Bank("ICICI Bank", "Baner", 75648397583, "ICICI09768", "11.9%");
console.log(icici_bank);
const kotak_bank = new Bank("Kotak Bank", "Viman Nagar", 7697920432, "KOTAK65793", "9.45%");
console.log(kotak_bank);
const hdfc_bank = new Bank("HDFC Bank", "Nigdi", 9687594355, "HDFC21454", "10.24%");
console.log(hdfc_bank);
const punjab_bank = new Bank("Punjab National Bank", "Moshi", 987067843, "PNB0078694", "8.9%");
console.log(punjab_bank);
console.log(``);

console.log("======= Add all elements into the array and traverse by using for of loop ======");
const bankName = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank];
for (const Bank of bankName) {
    console.log(`Bank Name and Location is :- ${Bank.bank_name}, ${Bank.location}`);
}
console.log(``);

console.log("====== Kotak bank details by using for of loop  ======");
for (const Bank of bankName) {
    if((bank_name = "kotak_bank")) {
        console.log(kotak_bank);
        break;
    }
}
console.log(``);

console.log("====== All Bank details by using for loop ======");
for (let index = 0; index < bankName.length; index++) {
    const element = bankName[index];
    console.log(element);
    
}
