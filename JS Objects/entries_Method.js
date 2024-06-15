const person = {
    fname : "Srajan",
    lname : "Saxena",
    age : 19,
    hobby : ["Cricket" ,"Coding" , "Movies"],
};

console.log(Object.entries(person) , typeof(Object.entries(person)))
let text = Object.entries(person);
// console.log(text , typeof text)

// * This method is useful for iterating objects a.k.a short trick

var txt = ""
for(var [prop , val] of Object.entries(person)){
    txt = prop + ' ' + val + '\n';
    console.log(txt)
}
// todo - learn more about 'of' keyword in js

// ? Note : Object.entries() also makes it simple to convert objects to maps:

const fruits = {Bananas:300, Oranges:200, Apples:500};
const myMap = new Map(Object.entries(fruits));
console.log("New Map : " , myMap)