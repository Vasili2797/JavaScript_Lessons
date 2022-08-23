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
