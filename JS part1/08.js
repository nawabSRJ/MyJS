// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "harshit";

// // console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
age = age + "";
console.log(age)
console.log(typeof(age)); //"22"


// // convert string to number. 

let myStr = +"34"; // ! applying a '+' sign before a string makes it a number
console.log('myStr is : ',typeof myStr);

let Nage = "18";
Nage = Number(Nage);
console.log(typeof Nage);
console.log('Number Constructor takes any value and converts it to typeof Number:')
console.log(typeof(Number("5"))); // this should be evident because prompt takes input as string and so does HTML based input but in JS we have to convert it to Number using it's Constructor

let str = 18
str = String(str);
console.log(str);
console.log(typeof str);