const person = {name : "Srajan" , age : 19}
console.log("Complete Object : " , person)
console.log("Accessing values using keys : ")
console.log(person.name , typeof(person.name) )
console.log(person.age , typeof(person.age))

// * creating Object Constructor function ~ basically a Constructor / Template for creating many objects of the same type

// ? parameters and keys are different , keys are referred using 'this' keyword
function Person(pname , page , pgender){
    this.name = pname;
    this.age = page;
    this.gender = pgender;
}

const father = new Person("John" , 32 , "Male")

// * accessing values
console.log("Name of Father : " , father.name)  
console.log("Age of Father : " , father.age)

//  Storing arrays in Objects
const Animal = {
    name : "Dog",
    breed : "Labrador",
    looks : ["White" , "Bulky" , "Obese"]
}

console.log("Looks of Labrador : " , Animal.looks)

// ? adding additional keys to object
Animal.hobbies = ["FrizBee" , "VollyBall" , "Sleeping" , "Licking"]
console.log("Hobbies of Labrador : " , Animal.hobbies , "\n")


// Object Methods

// Returns an array of the key/value pairs of an object
console.log("Enteries in father object : \n" , Object.entries(father))


// Returns an array of the keys of an object
console.log(Object.keys(father))

// * Key Overriding (Tricky + Interview)
const obj1 = {
    key1 : "val1",
    key2 : "val2",
    key1 : "val60",   // overrides previous value of key1
}
console.log(obj1)   