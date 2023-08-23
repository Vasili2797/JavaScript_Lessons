// Higher order functions

// reduce

const doubleMap = (numbers) => {
  return numbers.map((number) => number * 2);
};
console.log(doubleMap([5, 10, 15, 20]));
[1, 2, 3, 4].map((number) => console.log(number));

// only give me numbers that are greater than 3:
const numsGreaterThanThree = (param1, GreaterThan) => {
  for (let number of param1) {
    if (number > GreaterThan) {
      console.log(number);
    }
  }
};
[1, 2, 3, 4, 5, 6, 7];
console.log();
numsGreaterThanThree([1, 4, 7, 2, 5, 3, 6].sort(), 3);
console.log();

numsGreaterThanThree([1, 4, 7, 2, 5, 3, 6], 4);
console.log();
// filter -
[2, 5, 6, 8, 32, 7, 8].filter((num) =>
  console.log("number: " + num + " " + (num > 6))
);
console.log();

console.log([2, 5, 6, 8, 32, 7, 8].filter((num) => num >= 6));

// map - Loops and returns an array
const objects = [
  { name: "Arnold", netWorth: 2000000 },
  { name: "Bobby", netWorth: 300000 },
  { name: "Luna", netWorth: 500000 },
];

// let resultOfObjects = objects.filter((object) => object.netWorth > 400);
// console.log(resultOfObjects);
// let names = resultOfObjects.map((object) => object.name).join(", ");
// objects.innerHTML = `<h1>${names}</h1>`;

// sum all of the net worths
//SUM: think reduce
const sumArrayWithReduce = (numbers) => {
  numbers.reduce();
};

const nums = [1, 2, 3, 45];
const numbersgame = [1, 2, 3];
const finalResult = (numberParameter) => {
  let sum = 0;
  for (let i = 0; i < numberParameter.length; i++) {
    sum += numberParameter[i];
  }
  return sum;
};
console.log(finalResult(nums));

const numsForSum = [0,1, 2, 3,4,5];
const result=numsForSum.reduce(function (prev, curr) {
  return prev+curr;
});
console.log(result);

function sumOfArray(param1){
  let sum=0;
  for(let i=0;i<param1.length;i++){
    sum+=param1[i];
  }
  return sum;
}
console.log();
console.log(
sumOfArray([1,2,3,4,5,6,7,8,9]));

function multiplyArrayNums(param1){
  let result=1;
  for(let i=0;i<param1.length;i++){
    result*=param1[i];
  }
  return result;
}
console.log(multiplyArrayNums([1,2,3,4,5]));

function recursion(num){
  if(num===0){
    return 1;
  }else{
    return num*recursion(num-1);
  }
}
console.log(recursion(6));

function multiply(a,b){
  return a*b;
}
const numsarray = [1,2,3,4,5,6,7];
const resultUsingSolution = numsarray.reduce((a,b)=>a*b, 1); // This is the function, and the number it starts with
console.log(resultUsingSolution);