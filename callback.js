function hello(myname) {
  //myname is a placeholder
  console.log("hello world " + myname);
}
let myname = "deepak";

//passing function as parameter. so hello is executed internally
function greeting(callback, myname) {
  callback(myname);
}

//test- calling a function without callback. it also works. why do we need callback?
function todayWeather(status) {
  console.log("today's weather is " + status);
}

function noCallback(status) {
  console.log("greeting_noCallback function starts");
  todayWeather(status);
}

noCallback("rainy");

greeting(function hello1(myname) {
  console.log("hello world " + myname);
}, "benjamin");

greeting(function (myname) {
  //anonimous function. has no name
  console.log("hello world " + myname);
}, "deepak");

greeting((myname) => console.log("hello world " + myname), "lucy");
