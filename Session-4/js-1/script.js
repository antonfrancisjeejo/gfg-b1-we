// var a = "Jacob"; //string
// var b = 23;
// var c = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// function calculate1(input, name, email) {
//   console.log(name, input, email);
// }

// calculate1(1, "Anotr", "antor@gmail.com");

// let, const

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a, b, c);

//var - global scoped
// let and const - block scoped
//conditions
// if (!(a > 5 || a == 11)) {
//   console.log("Greater");
// } else {
//   console.log("Lower");
// }

// let a = 10;

// console.log("let: Outside block", a);

// if (a > 5) {
//   let a = 35; // separate variable
//   let c = 15;
//   console.log("let: inside block", a);
// }

// console.log("let: Outside block", a);

// var b = 10;

// console.log("var: Outside block", b);

// if (b > 5) {
//   var b = 35;
//   console.log("var: inside block", b);
// }

// console.log("var: Outside block", b);

// const name = "Jake";
// console.log(name);
// name = "Kevin";

// 1. string
// 2. number
// 3. boolean
// 4. array
// 5. object

// const fruits = ["Apple", "Mango", 1, 2];

// fruits[0] = "Orange";

// fruits = ["Banana"];

// console.log(fruits);

// const person = {
//   fName: "Kevin",
//   lName: "jacob",
//   age: 1,
//   required: false,
//   sports: ["Football", "Cricket"],
// };

//hositing
// x = 10;
// console.log(x);

// let x;

// function printOut() {
//   console.log("Printing.....");
// }

//arrow functions
// const printOut = () => {
//   console.log("Printing.....");
// };

// printOut();

//IIFE functions - immediately invoked function expression

// (() => {
//   console.log("Printing.....");
// })();

//anonymous functions
// () => {
//   console.log("Printing.....");
// };

// for(intializer;condition;incrementer){

// }

// for (let x = 0; x < 10; x += 2) {
//   console.log(x);
// }

let x = 0;
// while (x > 10) {
//   console.log(x);
//   x++;
// }

do {
  console.log(x);
  x++;
} while (x > 10);
