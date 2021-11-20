function greeting() {
  console.log("hi");
  console.log("end");
}

function farewell() {
  console.log("bye");
}

//async
console.log("start");
//greeting();
setTimeout(greeting, 5000); //5second. background task is done. it is async

//farewell();

//async
//setTimeout(greeting, 5000);
//setTimeout(greeting, 5000);
//setTimeout(greeting, 5000);
//setTimeout(greeting, 5000);
