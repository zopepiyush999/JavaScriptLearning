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

console.log("====== Create a Map in such way that key should be AccountNo and value is the object create in previous steps ======");
const details= new Map()
details.set(85637812938, axis_bank)
details.set(8542378423, sbi_bank)
details.set(75648397583, icici_bank)
details.set(7697920432, kotak_bank)
details.set(9687594355, hdfc_bank)
details.set(987067843, punjab_bank)
console.log(`Value of Key is :-`);
const keyOfMapDetails = details.keys();
console.log(keyOfMapDetails);
console.log(``);

console.log("====== Traverse the map ======")
for (const iterator of keyOfMapDetails) {
    const employee = details.get(iterator);
    console.log(`Bank Name-:${employee.bank_name} Account No-:${employee.account_no} Interest Rate-:${employee.interest_rate}`);  
}