var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

// ! Conditional Statements

// ! If- syntax:- if(condition){//code}
// let number = 16;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("odd");
// }

// number % 2 === 0 ? console.log("Even") : console.log("Odd");

//  ! If -else Ladder

// let userName = "radsafam@gmail.com"
// let password = 123456

// if(userName === "ram@gmail.com" && password === 123456){
//     console.log("Login successful")
// }
// else if(password !== 123456 ){
//     console.log("Password Incorrect")
// }
// else if(userName !== "ram@gmail.com"){
//     console.log("Username wrong")
// }
// else{
//     console.log("User Not Found")
// }

// ! Switch :- It is used to compare the values

// let day = 5;
// switch (day) {
//   case 1: {
//     console.log("Monday");
//     break;
//   }
//   case 2: {
//     console.log("Tuesday");
//     break;
//   }
//   case 3: {
//     console.log("Wednesday");
//     break;
//   }
//   default:{
//     console.log("Invalid day")
//   }
// }

// ! Looping statements

// @ For loop

// ! Print the numbers from 1 to 5

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// ! While

// let i = 0;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// ! Arrow function

let demo = () => {
  console.log("I am a demo function");
};
demo();
let demo1 = () => console.log("I am a demo1 function");
demo1();
let demo2 = ($) => console.log("I am a demo2 function");
demo2();
let displayNumber = (number) => console.log(number);
displayNumber(50);
// ! implicit return
let add = (a,b) => a+b
console.log(add(10,20))
// ! Explicit Return
let sub = (a,b) => {
    return a-b
}
console.log(sub(20,10))