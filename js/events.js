// let h1 = document.querySelector("h1");

// let colorChange = () => {
//   h1.style.color = "red";
// };

// let colorChange1 = () => {
//   h1.style.color = "blue";
// };

// let colorChange2 = () => {
//   h1.style.color = "black";
// };

// let keyDown = ()=>{
//     console.log("Key Down")
// }
// let keyUp = ()=>{
//     console.log("Key up")
// }
// let keyPress = ()=>{
//     console.log("Key press")
// }

let input = document.querySelector("input");
let form = document.querySelector("form");
// let displayName = (e) => {
//   e.preventDefault();
//   console.log(input.value);
// };
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
let changeEvent = () => {
  console.log(input.value);
};
let load = () => {
  document.body.style.backgroundColor = "blue";
};
let scroll = () => {
  document.body.style.backgroundColor = "green";
};
let resize = () => {
  document.body.style.backgroundColor = "red";
};
