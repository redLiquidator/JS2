function getName(myname) {
  setTimeout(() => {
    console.log("i am in a getName method");
    return myname;
  }, 5000);
}

function getName1(name, callback) {
  setTimeout(() => {
    console.log("i am in a getName1 method");
    callback(name);
  }, 5000);
}
console.log("start");

let username = getName("benjamin");
let username1 = getName1("benjamin", function (username1) {
  console.log(username1);
});
console.log(username);
console.log("end");
