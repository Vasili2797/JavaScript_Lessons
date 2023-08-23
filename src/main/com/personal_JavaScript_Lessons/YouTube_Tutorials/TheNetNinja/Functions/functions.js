// function expression
const speak = function (name) {
  console.log("Good Day!", name);
};

// Call or invoke the function
greet();

speak("Billy");

// Function declaration ... Function gets hoisted only to function declaration
function greet() {
  console.log("Hello World!");
}

const calcArea = function (radius) {
  return (area = Math.PI * radius ** 2);
};

console.log(calcArea(5));

const calcVol = function (area, height) {
  return (volume = area * height);
};

console.log(calcVol(calcArea(5), 3.274));

// Arrow function
const calcAreaArrow = (radius) => 3.14 * radius ** 2;

calcAreaArrow(12);

//Turn a regular function into an arrow funciton
const greetArrow = (argument) => `hello world ${argument}`;
console.log(greetArrow("Johnny"));

const billArrowFunction = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

let products = [5, 7, 9];
console.log(billArrowFunction(products, 0.035));

// Create a method
let personName = "Billy";
let result = personName.toUpperCase();
console.log(result);

// Callback Functions

const myFunc = (callbackFunction) => {
  let value = 50;
  callbackFunction(value);
};

myFunc((value) => {
  console.log(value);
});

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
// people.forEach((i) => console.log(i));
// console.log("");
// people.forEach(function (person) {
//   console.log(person);
// });

// console.log("");
// people.forEach((person, index) => {
//   console.log(index, person);
// });

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);

const ul = document.querySelector(".people");
let html = ``;

people.forEach(person => {
  // Create an HTML template
  html += `<li style="color:green">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
