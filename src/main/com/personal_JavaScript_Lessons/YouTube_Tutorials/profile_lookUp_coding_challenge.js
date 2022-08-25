let contacts=[
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "032441351",
        "likes":["Pizza","Coding","Brownie Points"],
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "03234534",
        "likes": ["Hogwarts", "Magic","Hagrid"],
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "075621361",
        "likes":["Intriguing cases", "Violin"],
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"],
    }
];

function lookUpProfile(name, prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstName===name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

let data=lookUpProfile("Sherlock","sport");
console.log(data);