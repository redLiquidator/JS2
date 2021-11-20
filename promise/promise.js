//homework: print array using promise
//different ways of creating promise 1
//using variable

// let promise = new Promise((resolve, reject) => {
//   let num = 10;

//   if (num % 2 == 0) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });

// promise
//   .then(
//     (value) => {
//       console.log(value + " is even number");
//       let numArray = ["success", 1, 2, 3];
//       return numArray;
//     },
//     (error) => {
//       console.log(error + " is odd number");
//       let numArray = ["error", 4, 5, 6];
//       return numArray;
//     }
//   )
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//resolve promise is fulfilled
//resolver can be a function called resolve

//different ways of creating promise 2
//using function (doesnt work..)
// function promise2(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 == 0) {
//       resolve(num);
//     } else {
//       reject(num);
//     }
//   });
// }

// promise2(10)
//   .then(
//     (value) => {
//       console.log(value + " is even number");
//       let numArray = ["success", 1, 2, 3];
//       return numArray;
//     },
//     (error) => {
//       console.log(error + " is odd number");
//       let numArray = ["error", 4, 5, 6];
//       return numArray;
//     }
//   )
//   .then(
//     (value) => {
//       console.log(value + " is even number");
//     },
//     (error) => {
//       console.log(error + " is odd number");
//     }
//   );

// const promiseObj = new Promise((resolve, reject) => {
//   let req = false;
//   if (req == true) {
//     resolve("Request Success");
//   } else {
//     reject("Request Rejected");
//   }
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     //handle an error
//     console.log(error);
//   });

// const promiseObj = new Promise((resolve, reject) => {
//   let req = false;
//   if (req == true) {
//     resolve("Request Success");
//   } else {
//     reject("Request Rejected");
//   }
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //always executed. clear the resources
//     console.log("Cleaned");
//   });

// const promiseObj = new Promise((resolve, reject) => {
//   let num = 10;
//   resolve(num);
// })
//   .then((value) => {
//     console.log(value);
//     return value + 10;
//   })
//   .then((value) => {
//     console.log(value);
//     return value;
//   })
//   .then(() => {
//     throw new Error("Sunday");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let promise = new Promise((resolve, reject) => {
//   let num = 10;

//   if (num % 2 == 0) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });
// let response = await promise;
// console.log(response);
