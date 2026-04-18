console.log(typeof null)
console.log(typeof undefined)
console.log(Number(5)=== Number("5"))
console.log(Number("5"));
console.log(typeof(Number("5")));
console.log(Boolean([])); // true, because empty array is still an object
// We can say that objects are truthy values even if they are empty

console.log(Boolean({}));   // same above goes here
let name = 'Srajan Saxena';
console.log(name.trim().length);    // 13 (space character counted)
// This means that trim() only removes terminal spaces

console.log('Boolean of undefined', Boolean(undefined))
console.log('Boolean of null', Boolean(null))
console.log(typeof(undefined) == typeof(null))
console.log(typeof(undefined) === typeof(null))