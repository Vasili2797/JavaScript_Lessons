const newObject = {};
newObject.name = "Georges";
newObject.shirt = "Sleeveless";

//Assign something new
newObject["Shoes"] = "Nikes";
newObject.greeting = "Hola!";

console.log(newObject);
console.log("The shirt is: " + newObject["shirt"]);

//person2
const person2={
    name:"Martin",
    shirt: "Green",
    shoes: "brown",
    age:22
};

console.log(person2["name"]);
function martinFunction(){
    let name=person2.name;
    let shirt=person2.shirt;
    let age=person2.age;
    
    return "This is Martin's few properties: \n"
        + name+"\n"+age+"\n"+shirt;
    
}
console.log(martinFunction());

//making similar thing as up top, except with parameters
const introducer=(name, shirt)=>{
    const person={
        name: name,
        shirt:shirt,
        assets:100000,
        liabilities:50000,
        netWorth:function(){
            return this.assets - this.liabilities;
        }
    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}, and my net worth is $${person.netWorth()}`;
    return intro;

}
console.log(introducer("Samantha","blue"));
console.log(introducer("Leonardo","white"));

