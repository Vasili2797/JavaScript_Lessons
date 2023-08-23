function sum(a, b) {
  return a + b;
}

console.log(sum(15, 16));

function calculateFoodTotal(food, tip) {
  let tipPercentage = tip/ 100;
  let tipAmount = food * tipPercentage;
  let total = sum(tipAmount,food);
  return Math.round(total);
}

console.log(calculateFoodTotal(175.23,15));

/*
Write a function that sums two numbers
Write a function that subtracts two numbers
Write a function that divides two numbers
Write a function that multiplies two numbers
be sure to handle dividing by zero
*/

function summingTwoNumbers(a,b){
    return a+b;
}
function subtractingTwoNumbers(a,b){
    return a-b;
}
function dividesTwoNumbers(a,b){
    if(b == 0){
        const error = new Error("You cannot divide by zero!");
        return error;
    }
    return a/b;
}
function multipliesTwoNumbers(a,b){
    return a*b;
}