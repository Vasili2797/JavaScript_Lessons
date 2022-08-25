var a=5;
var b=10;

var c="I am a string";


a=a+1;
b=b+5;
c=c+" String!";

console.log(a);
console.log(b);
console.log(c);

var myStr="I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
console.log();
var newStr="I will start with \'single quotes\'. After which I shall use the \"double quotes.\" Additionally I will continue this with a \\ backslash which should apparently work. Let us make a \nnewline here. Then do some \rcarriage return, which I have no idea what it does. From here on out we shall \ttab this place and use a  \bbackspace to feel good. At the end I will \fform feed this place!";
var intStr="I will make a \n new line!"+" Now I am doing the \r thing. WHich I do not know what it does still";
var lastStr="So, to get this done. we start a newline\n\rand right away put the carriage thing there so that the words between the newline and carriage do not get lost!";

console.log(intStr);
console.log(lastStr);
console.log(newStr);

var lastName="humanLastName";
var secondToLastLetterOfLastName = lastName[lastName.length -2];
console.log(secondToLastLetterOfLastName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    //your code below this line
    var result="";
    result+="The "+myAdjective+" "+myNoun+" "+myVerb+" "+"to the store"+" "+myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

//demonstration of push in JavaScript array
var ourArray =["Stinson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);
console.log();
//Pop function
var newArray=[1,2,3];
var removedFromNewArray=newArray.pop();
console.log(removedFromNewArray);
console.log(newArray);
var arrayInsideArray=[["John", 23], ["cat",2]];
console.log(arrayInsideArray);
var removedFromArrayInsideArray=arrayInsideArray.pop();
console.log(removedFromArrayInsideArray);
console.log(arrayInsideArray);

//The shift function
let removedFromOurArray =ourArray.shift();
console.log("Array called removedFromArray"+removedFromArrayInsideArray);
let myNewArray=[["John", 23], ["dog",3]];
let removedFromArray=myNewArray.shift();
console.log("removed from array list "+removedFromArray);
console.log(removedFromArray + " removed from Array list");

//the unshift function
//Setup
let myArray=[["John", 23],["dog",3]];
console.log(myArray);
myArray.shift();
console.log(myArray);
//Now lets unshift
myArray.unshift(["Paul", 35]);
console.log(myArray);

function helloWorld(){
    console.log("hello world!");
}
helloWorld();

function addTwoNumbers(a,b){
    console.log(a + b);
}
addTwoNumbers(10,11);

var outerWear="T-shirt";
function myOutfit(){
    var outerWear="sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr=[1,2,3,4,5];
console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr));

function testEquality(val){
    if(val==12){//== does type conversion, so different types could be equal to each other
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEquality(12));
console.log(testEquality('12'));

//now to check Strict equality use ===
function testStrict(val){
    if(val===7){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(7));
console.log(testStrict('7'));

function testSize(num){
    if(num<5){
        return "Tiny";
    }else if(num<10){
        return "Small";
    }else if(num<15){
        return "Medium";
    }else if(num<20){
        return "Large";
    }else{
        return "Huge";
    }
}
console.log(testSize(7));

//the switch statement in JavaScript
function caseInSwitch(val){
    let answer="";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break;    
    }
    return answer;
}

console.log(caseInSwitch(3));

function swithOfStuff(val){
    let answer="";
    switch(val){
        case "a":
            answer="apple";
            break;
        case "b":
            answer="bird";
            break;
        case "c":
            answer="cat";
            break;
        default:
            answer="stuff";
            break; 
    }
    return answer;
}
console.log(swithOfStuff("b"));

let count=0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }

    let holdBet='Hold';
    if(count>0){
        holdBet='Bet';
    }
    return count +" "+holdBet;
}

console.log(cc(2));
console.log(cc('K'));
console.log(cc('A'));
console.log(cc(10));
console.log(cc('k'));

/*  Building JavaScript objects
    objects are similar to arrays, except that instead of using indexes to access data you use properties
*/
//example
let ourDog={
    /*Properties*/"name": "Camper",/*values*/
    "legs":4,
    "tails":1,
    "friends":["everything!"]
};
let myDog={
    "name":"Quincy",
    "legs":4,
    "tail":2,
    "friends":[]
}

console.log(ourDog);
//to access specific values inside of the objects: Just use the . product
let nameValue=myDog.name;
console.log(nameValue);
//another way to access the values would be like this
let tesetObj={
    "an entree":"hamburger",
    "my side":"veggies",
    "the drink": "water"
}
let entreeName=tesetObj["an entree"];
console.log(entreeName);

//add new properties to an object
ourDog.bark="bow-wow";
console.log(ourDog);
//additional way to add properties
//tesetObj['chips']="Lays";
tesetObj.plate="plate";
console.log(tesetObj);
//to delete a property
delete tesetObj.plate;
console.log(tesetObj);

//looking objecs for lookups
function phoneticLookup(val){
    let result="";

    let lookup={
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result=lookup[val];
    return result;
}

console.log(phoneticLookup("charlie")+ phoneticLookup("delta"));

//Check if an object has a property
let myObj={
    gift:"pony",
    pet:"kitten",
    bed:"sleigh",
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not Found";
    }
}
console.log(checkObj("gift"));

//Manipulating Complex Objects. to store flexible data
let myMusic=[
    {
        "artist":"Billy Joel",
        "title" :"Piano Man",
        "release_year": 1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold":true
    },
    //add record here
    {
        "artist":"Beau Carnes",
        "title" :"Cereal Man",
        "release_year": 2003,
        "formats":[
            "Youtube video",
        ]
    }
]
console.log(myMusic);
//in order to get nested map
let myStorage={
    "car": {
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
};
let gloveBoxContents=undefined;
gloveBoxContents=myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//setup
let collection={
    "2548":{
        "album":"Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks":[
            "Let it Rock",
            "You give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist": "Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[ ]
    },
    "5439":{
        "album":"ABBA Gold"
    }
};
//Keep a copu of the collection for tests
let colelctionCopy=JSON.parse(JSON.stringify(collection));

//Only change code below this lne
function updateRecords(id, prop, value){
    if(value===""){
        delete collection[id][prop];
    }else if(prop ==="tracks"){
        collection[id][prop]=collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection;
}
console.log("The work after the function");
updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"));

//Iterate with While Loops

let myNewNewArray=[];
let i=0;
while(i<5){
    myNewNewArray.push(i);
    i++;
}
console.log(myNewNewArray);

//Iterate with For Loops
let ourNewArray=[];
for(let i=0; i<5;i++){
    ourNewArray.push(i);
}
console.log(ourNewArray);

//Nested for loops
function multiplyAll(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }
    return product;
}
let product=multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//Iterate with Do..While Loops

let myVarArray=[];
let k=10;
do{
    myVarArray.push(k);
    k++;
}while(k<5)
console.log(k, myVarArray);

//generate random fractions
function randomFraction(){
    return Math.random();
}
console.log(randomFraction());
//generate random whole number
let randomNumBetween0and100=Math.floor(Math.random() *100);
function randomNumber(){
    //return Math.random()*100;
    return Math.floor(Math.random()*30);
}
console.log(randomNumBetween0and100);
console.log(randomNumber());

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax -ourMin +1))+ourMin;
}
let ourRandom=ourRandomRange(1,9);
function randomRange(myMin, myMax){
    return Math.floor(Math.random() *(myMax-myMin)) +myMin;
}
let myRandom=randomRange(5,30);
console.log(ourRandom);
console.log(myRandom);

function convertToInteger(str){
    return parseInt(str);
}
console.log(convertToInteger("56") +typeof(convertToInteger("56")));

function convertToIntegerBinary(str){
    return parseInt(str,2);
}
console.log(convertToIntegerBinary("10011"));

//chenge if else statment into ternary operator
function checkEqual(a,b){
    return a===b ? true:false;
}
console.log(checkEqual(3,3));

function checkSign(numberN){
    return numberN >0 ? "positive" : numberN < 0 ? "negative" :"zero"
}
console.log(checkSign(0));

//To be able to change the const array
const s=[5,7,2];
console.log(s);
function editInPlace(){
    "use strict";

    //s=[2,7,5];//throws an error saying TypeError: Assignment to constant variable...
    //however if we do this it will work
    s[0]=2;
    s[1]=5;
    s[2]=7;
    console.log(s);
}
editInPlace();

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS={
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI=99;
    }catch(ex){
        console.log("Can't do it");
    }
    return MATH_CONSTANTS.PI;
}
const PI=freezeObj();
console.log(PI);

//turn a normal function with arguments into an arrow function

var myConcat=function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,2],[3,4,5]));

//these two do the same exact thing
const myConcatCopy=(arr1,arr2)=>arr1.concat(arr2);
console.log(myConcatCopy([1,2],[3,4]));

//Default parameters Be able to increment easily
const increment=(function(){
    return function increment(number, value=1){
        return number+value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

const sum=(function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    };
})();

console.log(sum(1,2,3,4,5));

//gettung the forecast for the next morning in JS
const LOCAL_FORECAST={
    today: {min:72, max:83},
    tomorrow: {min:73.3, max:84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";
    const { tomorrow: {max: maxOfTomorrow}}=forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use destructuring assignment with the Rest Operator
const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const[ , , ...arr]=list;
    return arr;
}
const arr=removeFirstTwo(source);
console.log(source);
console.log(arr);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats={
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    node:23.87,
    min: -0.75,
    average: 35.85
};
const half=(function(){
    return function half({max, min}){
        return (max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));

//Using template literals in JavaScript
const person={
    name: "Zodiac Hasbro",
    age:56
};
//Template literal with multi-line and string interpolation
const greeting=`Hello, my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting);
//The top code is extremely similar to the Python formatted string literals