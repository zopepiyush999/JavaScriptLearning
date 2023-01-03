const car = {
    carName: "Creta SX",
    company: "Hyundai",
    launchYear: 2017
}
const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}
console.log("This is the merge object details of Hyundai Creta SX Model by using assign.object() :-");
const objectAssign = Object.assign(car, carEngine);
console.log(objectAssign);
console.log(``)

console.log("This is the merge object details by using Spread Operator ")
const mergedObjects = {...car, ...carEngine}
console.log(mergedObjects);