// document.getElementBYId("count-el").innerText=5
let saveEl = document.getElementById("save-el");
let countEl=document.getElementById("count-el");

console.log(countEl);
// initialize the count to 0
let count=0;
// listen for clicks on the increment button
function increment(){
    console.log("Button Was Clicked");
    count+=1;
    countEl.innerText=count;
}

// Create a function, save(), which logs out the count when it's called

function save(){
    let countstr = count + " - ";
    saveEl.textContent += countstr;
    countEl.textContent=0;
    count=0;
}


