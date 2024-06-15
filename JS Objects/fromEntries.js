const fruits = [['apple' , 30] , ['pears' , 90]]
const myobj = Object.fromEntries(fruits)

console.log("Object from fruits array : " , myobj)
console.log(myobj.pears)

const obj1 = {
    fname : "Srajan",
    lname : "Saxena",
    age : 19,
}

const clonedObj = Object.fromEntries(Object.entries(obj1));
console.log(clonedObj);     // Output: { name: 'Bob', age: 30 }
