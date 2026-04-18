// template string - like f-string in python, here in JS dollar sign is used with {} ~ ${variable}
let age = 22;
let firstName = "harshit"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);

// Math Operations within String literals
let item = "sword"
let count = 3
let price = 49.5

console.log(`You have ${count} ${item}s worth $${count * price} total`)
console.log(`I have 2 sowrds, you have ${count} swords, total is 2+3 = ${count+2}`)

firstName = 'Srajan';
let lastName = 'Saxena'
console.log(`My full name is ${firstName+lastName}`);
console.log(`My full name is ${firstName+' '+lastName}`);
console.log(`My name 2 times is ${firstName * 2}`)  // Nan
// string is not multiply able with number
console.log('str' * 4); // Nan