// undefined 
// null

let firstName;
console.log(typeof firstName);
firstName = "Harshit";
console.log(typeof firstName, firstName);

console.log('\n');

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug , error 

BigInt  // ! no error on this line
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);
