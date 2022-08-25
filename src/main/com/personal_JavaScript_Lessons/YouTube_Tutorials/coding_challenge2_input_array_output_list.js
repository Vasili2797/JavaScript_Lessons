const result={
    success: ["max=length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr){
    const resultDisplayArray=[];
    for(let i=0; i<arr.length;i++){
        resultDisplayArray.push(`<li class="text-warning>${arr[i]}</li>`)
    }
    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ '<li class="text-warning">no-var</li>',
 *   '<li class="text-warning">var-on-top</li>',
 *   '<li class="text-warning">linebreak</li>']
 */
const resultDisplayArray=makeList(result.failure);
console.log(resultDisplayArray);

const createPerson =(name,age,gender)=>({name,age,gender});

console.log(createPerson("Jonathan",30,"male"));

const bicycle={
    gear:2,
    setGear: function(newGear){
        "use strict";
        this.gear=newGear;
    }
};
bicycle.setGear(5);
console.log(bicycle.gear);

//Using class constructor to build stuff in JavaScript
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet=targetPlanet;
    };
};
 let zeus=new SpaceShuttle('Mars');
 console.log(zeus.targetPlanet);



 //DO the same thing to the vegetable class
class makeClass{
    constructor(Vegetable){
        this.Vegetable=Vegetable;
    };
};
//const Vegetable=new makeClass('carrot');
let carrot=new makeClass('carrot');
console.log(carrot.Vegetable);

//The way that the dude did in the video:
function makeClassRepeat(){
    class vegetable{
        constructor(name){
            this.name=name;
        }
    }
    return vegetable;
}

let vegetable=makeClassRepeat();
const cucumber=new vegetable('cucumber');
console.log(cucumber.name);

//getters and setters in JavaScript
function thermostatClass(){
    class Thermostat{
        constructor(temp){
            this._temp=5/9*(temp -32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp=updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat=thermostatClass();
let thermos=new Thermostat(76);
let temp=thermos.temperature;
//thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);