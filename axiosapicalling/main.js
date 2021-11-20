let output = document.getElementById("output");
let submitbtn0 = document.getElementById("submitbtn0");
submitbtn0.addEventListener("click", axiosRequest2);

function axiosRequest() {
  config = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  };
  let promise = axios(config);
  console.log(promise);
  promise.then((value) => (output.textContent = value.data));
}

function axiosRequest2() {
  config = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  };
  let promise = axios(config);
  console.log(promise);
  promise.then((value) => (output.textContent = value.data[0].title));
}
