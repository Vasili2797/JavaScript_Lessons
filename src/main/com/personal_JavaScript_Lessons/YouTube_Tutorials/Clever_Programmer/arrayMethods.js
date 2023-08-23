//double the numbers using map

let result = [1, 2, 3, 4, 5, 6, 7].map((number) => 2 * number);
console.log(result);

//filter
let numArray = [1, 3, 5, 4, 9, 8, 2, 7];
console.log();
//print out numbers that are greater than 3
const filter = (numbers, greaterThan) => {
    let result=[];
    for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result.sort((a,b)=>a-b);
};

// console.log(filter(numArray, 2));
const nums=[1,2,3,4,5,6,7];
console.log(
nums.filter(num=>num>=6));
nums.innerHTML=`<h1>${nums[2]}</h1>`;

function addArrayElements(param1){
  let sum=0;
  for(let i=0;i<param1.length;i++){
    console.log(param1[i]);
    sum=sum+param1[i];
  }
  return sum;
}

console.log(addArrayElements([1,2,3,4,5,6,7,8,9,10]));

//iterate through an array, find the same elements, and add it to an empty array
// Write your code below


let bobsFollowers=['John', 'George', 'Jordan','Bobby'];
let tinasFollowers=['Bobby', '' ,'John'];
let mutualFollowers=[];

for(let i=0; i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);