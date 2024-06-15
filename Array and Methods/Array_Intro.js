let arr = ["hello" , {name : 'john'} , true , function(){console.log('func in array')}]
// run function at index 3
arr[3]();

// get object
console.log(arr[1].name)  

// * Array Methods
var strs = ["Srajan" , "Hey" , "JS" , "React JS"]
var nums = [10 , 20 , 32 , 92]
var hybrid = ["Srajan" , 19 , "Male" , 19]


console.log(strs.concat(nums))


console.log("Index of 20 " , nums.indexOf(20))
console.log("Index of 'Srajan' " , hybrid.indexOf('Srajan'))
console.log("Index of 19 " , hybrid.indexOf(19))


var numsJoined = nums.join();
console.log(numsJoined , typeof numsJoined)

hybridJoined = hybrid.join();
console.log(hybridJoined , typeof hybridJoined)

nums.push(52)
console.log("After pushm 52 in nums " , nums)

let x = nums.push(72)
console.log("Here is x : " , x)
// push func also returns the new length of the array after the push operation

let y = nums.toString();
console.log(y , typeof y)

const fruits = ["Banana" , "Orange" , "Lemon"];
const citrus = fruits.slice(1);                 // * works the same way as it does with strings
console.log(citrus)

// * ----------------------------- Clone of an Array ----------------------------------

// Method 1
var arr1 = ["first" , "second"];
var arr2 = arr1;

console.log("Is arr1 and arr2 equal : " , arr1 === arr2)

// change in one
arr2.push("third")
console.log("Automatic change in arr1 : " , arr1)
arr1.pop();
console.log(arr2)

// Cloning array in the above way will make arr1 and arr2 point to the same memory address and thus changing the content of one array will automatically affect the other in the same manner

// Method 2 (where arrays are separate)
var arr3 = ["item1" , "item2" , "item3"]
var arr4 = [].concat(arr3); // or you can write this line :
// var arr4 = arr3.slice(0); 

console.log("Are arr3 and arr4 equal : " , arr3 === arr4)
console.log(arr4)

// using 'const' keyword for arrays :
const a = ["hello"]
a.push("there");    // valid because memory location is not changing
// a = ["hello" , "there" , "heya"];   ~ generates error : Assignment to const variable
console.log(a)