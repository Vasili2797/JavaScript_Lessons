/**
 * data types:
 *  Numbers 1, 5, 6
 * Strings 'hello, "String"
 * arrays []
 * objects {}
 * boolean
 */

const amount = 10.235;
console.log(Math.floor(amount)); // ceil rounds it up, floor rounds it down

function weatherAnnouncement(weather){
    if (weather == "rain") {
        console.log("Grab your umbrella");
    }else{
        console.log("Wear your sunglasses");
    }
}
weatherAnnouncement("rain");

function sayMyName(name){
    console.log("Me llamo "+name);
}

sayMyName("Billy");

function greeting(name){
    greet=`hi ${name}, Nice to meet you!`
    console.log(greet);
}
greeting("Bill");