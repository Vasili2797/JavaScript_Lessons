const groceries =['apples', 'bananas', 'orange','peaches'];
console.log(groceries)
console.log();
console.log(groceries[groceries.indexOf('orange')]);

groceries.push("bread");
console.log(groceries);

//add at the beginning of the array
groceries.unshift("tangerine");
console.log(groceries);

//Slice says start from first index-INCLUSIVE and Up to the second index-EXCLUSIVE
let slicedArray = groceries.slice(2,5);
console.log(slicedArray);

let slicedArrayWithIndexOf =groceries.slice(groceries.indexOf('apples'),groceries.indexOf('peaches'));
console.log(slicedArrayWithIndexOf);
