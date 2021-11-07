//what are the different ways to use our functions in JS?
//way1 normal function
function drink(drinkitem) {
  console.log("drink " + drinkitem);
}

//another way function expression
let drinkto = function (drinkitem) {
  console.log("drink " + drinkitem);
};
drink("coffee");

//way2 ()
let dinner1 = (dinneritem) => console.log("eat " + dinneritem);

dinner1("fried rice");

//create add function with all possible ways
function add(a, b) {
  console.log(a + b);
}
add(1, 2);

let add1 = (c, d) => {
  console.log(c + d);
};

add1(3, 4);

//print the given table (ex. 2*2)
//way1
function multiplicationTable(m, n) {
  for (let i = 2; i < m; i++) {
    for (let j = 2; j < n; j++) {
      console.log(i + "*" + j + " = " + i * j);
    }
  }
}
multiplicationTable(6, 6);

//way2
let multiplicationTable1 = (m, n) => {
  for (let i = 2; i < m; i++) {
    for (let j = 2; j < n; j++) {
      console.log(i + "*" + j + " = " + i * j);
    }
  }
};
multiplicationTable1(4, 4);
