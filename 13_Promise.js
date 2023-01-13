
let isNotesPrepared = false;
let promiseToShareNotes = new Promise(function (success, reject) {
  if (isNotesPrepared) {
    success("Hey guys take this notes please...");
  } else {
    reject("Sorry guys, I didn't get time today..");
  }
});
promiseToShareNotes.then(function success(fulfilled) {
    console.log(fulfilled);
  }).catch(function failure(rejected) {
    console.log("Sir why have not shared notes.. ");
    console.log(rejected);
  }).finally(function () {
    console.log("===========================");
    console.log("I must have notes - Whether Sir will give or not");
    console.log("In case sir shared notes - I will use it");
    console.log("In case sir does not shared notes - I will prepare my own notes..");
  });


// console.log("------------------------ Promise by using Arrow function ----------------------------");
// console.log(``);
// let isNotesPrepared = false;
// let promiseToShareNotes = new Promise((success, reject) => {
//   if (isNotesPrepared) {
//     success("Hey guys take this notes please...");
//   } else {
//     reject("Sorry guys, I didn't get time today..");
//   }
// });
// promiseToShareNotes.then((fulfilled) => {
//     console.log(fulfilled);
//   }).catch((rejected) => {
//     console.log("Sir why have not shared notes.. ");
//     console.log(rejected);
//   }).finally(() => {
//     console.log("===========================");
//     console.log("I must have notes - Whether Sir will give or not");
//     console.log("In case sir shared notes - I will use it");
//     console.log("In case sir does not shared notes - I will prepare my own notes..");
//   });