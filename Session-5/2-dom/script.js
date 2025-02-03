// document.getElementById("title").innerText = "Hello world";

// document.querySelector(".heading").innerText = "Hello";
// document.querySelector("#title").innerText = "Hello";

// let selection = document.querySelectorAll("h1");

// selection.forEach((item, index) => {
//   item.innerText = `Title - ${index}`;
// });

// const div = document.createElement("div1");

const body = document.querySelector("body");

// body.append(div);

// const fruits = ["Mango", "Orange", "Grapes", "Apple"];

// fruits.forEach((fruit) => {
//   const h1 = document.createElement("h1");
//   h1.innerText = fruit;
//   div.append(h1);
// });

const div = document.createElement("div");

// const text = document.createTextNode("Welcome to the session");

// h1.append(text);

// div.innerText = "<h1>Hello world</h1>";

// body.append(div);

const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://wallpapes.com/images/hd/aesthetic-computer-4k-c9qdhe02pr84wh3a.jpg"
);
img.setAttribute("alt", "lakeview");

div.append(img);

body.append(div);
