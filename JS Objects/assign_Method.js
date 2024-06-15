// * Object.assign()
const person1 = {
    fname : "Srajan",
    lname : "Saxena",
    age : 19,
    eye : "Black", 
};

const person2 = {
    fname : "Aaditya",
    age : 24,
};

// assigning : Object.assign(target , source)
Object.assign(person1 , person2)
console.log("Changes in Person 1 :")
console.log(person1)    // rest of the properties remain same

// adding new properties which are different
const person3 = {
    hobby : ["Cycling" , "Cooking " , "Cricket"],
    favFood : "Pasta",
}

Object.assign(person1 , person3)
console.log("Extra new changes in Person 1 :")
console.log(person1)    // rest of the properties remain same

