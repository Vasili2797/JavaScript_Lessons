// const fruits = ["apple", "banana", "mango", "pear"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// console.log();

// for (item in fruits) {
//   console.log(fruits[item]);
// }
// console.log();

// for (const fruit of fruits) {
//   console.log(fruit);
// }
// console.log();

const number = [1, 2, 3, 4, 5, 6, 7];
for (const num of number) {
  console.log(num);
}
console.log();

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

//create an array, double the numbers from another array, and add the doubled numbers to the new array
const numArray = [1, 2, 3, 4, 5, 6, 7, 8];
const doubledArray = [];
for (const j of numArray) {
  doubledArray.push(2 * j);
}
// console.log(doubledArray);

const double = (numbers) => {
  //create a function, double the numbers from another array, and add the doubled numbers to the new array
  const results = [];
  for (const j of numbers) {
    results.push(2 * j);
  }
  return results;
};
console.log();
// console.log(double([1,2,3,4,5,6,7,8, 9, 10]));

const letterCounter = () => {
  const phrase = " hey, can you go to the grocery store with me?";

  //  To get the actual letters in the string
  // for(const letter of phrase){
  //     console.log(letter);
  // }
  // for(let i=1; i<phrase.length;i++){
  //     console.log(i);
  // }
  let result = 0;
  for (const index in phrase) {
    console.log(Number(index) + 1);
    result = Number(index) + 1;
  }
  return { result };
};
// console.log(letterCounter());

//Method to count only the letters
const letterCounterWithoutSpaces = (param1) => {
  console.log(param1.replace(/\s/g, "").length);
};
// letterCounterWithoutSpaces("This is string");

const nums = [1, 2, 3, 4];
let result = 0;
const sumArray = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return { result };
};
// console.log(sumArray(nums));

const max = (numbers) => {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return { max };
};

const greaterArray = [1, 2, 5, 3, 6, 7, 23, 7, 2, 5, 9];
// console.log(max(greaterArray));

//create a function that returns the frequency of each letter, how often they occured
const letterFrequency = (param) => {
  // console.log(param);
  // Make a frequency object
  let frequency = {};
  for (const letter of param) {
    // Check if letter exists in frequency
    if (letter in frequency) {
      // increment the value +1
      frequency[letter] += 1;
      // Otherwise, set the value to 1
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency("parameter"));

//Try to do the same thing for words like you did in letters
//EX: wordFrequency("What is This") should return {'What':1 'is':1 'This':1}
const wordFrequency = (phrase) => {
  let frequency ={};
  words=phrase.split(' ');
  console.log(words);
  for(const word of words){
    if(word in frequency){
      frequency[word]+=1;
    }else{
      frequency[word]=1;
    }
  }
  return frequency;
};
console.log(
wordFrequency("This is awesome! This is great!"));

//Better version of this is:
const wordFrequencyPerfected=(phrase)=> {
  const words=phrase.split(' ');
  return letterFrequency(words);
}
console.log(wordFrequency("This is going to be awesome. This is tremendous!"));