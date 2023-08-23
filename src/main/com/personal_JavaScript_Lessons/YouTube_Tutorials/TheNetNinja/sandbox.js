let radius = 10;
var pi = 3.14;

console.log(radius, pi);

let result = radius % 3;

console.log(result);

const title = "Best Reads of 2019";
const author = "Mario";
const likes = 10;

// template String way of concatination using backticks
let stringResult = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(stringResult);

// Creating HTML templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`;

let ninjas = ["shaun", "ryu", "chun-li"];
console.log(ninjas.join(", "));
let pushResult = ninjas.push("ken");
console.log(ninjas);
let popResult = ninjas.pop();
console.log("The pop method result " + popResult);
console.log(ninjas);
console.log(3 < 4);

let age = 25;
console.log(age == "25");
console.log(age === "25");
console.log(age === 25);

// For Loops
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let numbers = 5;
do {
  console.log("mi name a Mario " + numbers);
  numbers++;
} while (numbers < 4);

const grade = "A";
switch (grade) {
  case "A":
    console.log("A is your grade");
    break;
  case "B":
    console.log("B is your grade");
    break;
  case "C":
    console.log("C is your grade");
    break;
  case "D":
    console.log("D is your grade");
    break;
  case "F":
    console.log("F is your grade");
    break;
  default:
    console.log("None of the cases ran!");
}

age = 50;
if (true) {
  let age = 32;
  console.log("the age is " + age, " inside the if block");
}
console.log("age outside of the code block is:", age);
