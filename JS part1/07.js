// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "harshit  ";

console.log(firstName.length);
firstName = firstName.trim(); // "harshit"
console.log(firstName)
console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // arshit
console.log(newString);
// * slice() function can be used on arrays as well
// * As we can see, slice() function returns a new string/array and does NOT modify the original string/array

// slice() on array
const fruits = ['banana','orange','lemon']
const newfruits = fruits.slice(1);
console.log(newfruits);

// trim() question and important note
let name = 'Srajan Saxena';
console.log(name.trim().length);    // 13 (space character counted)
// This means that trim() only removes terminal spaces