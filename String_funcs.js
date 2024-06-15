// * Note : All string methods return a new string. They don't modify the original string.  


// s = "Srajan"
// console.log(s.charAt(0))
// console.log(s.charCodeAt(0))

// console.log(s.at(3))
// console.log(s[2])

/*  ?                                   Extracting String Parts
var text = "Hello, this is Srajan"
console.log(text.slice(0 , 4))

console.log(text.slice(4))

console.log(text)  // no change in actual string

// * Note - apparently , slice() supports negative indexing
console.log(text.slice(-6 , -2))
console.log(text.slice(-6))

// * substr() - helps to extract a string based on start index and length 

text = "Hello , there"
console.log(text.substr(0 , 10))

// omit the 2nd parameter - slice out the complete string
console.log(text.substr(-4))    // + supports negative indexing
console.log(text.substr(-7 , 4))
console.log(text.substr(-7 , -4))   // no error but no output as well ~ len can't be -ve
*/
/*                               Concatenation

let t1 = "Hello"
let t2 = "there"

console.log(t1.concat(t2))
console.log( "Using Concat func : ", t1.concat(" " , t2))

// * '+' operator can also be used for concatenation
console.log(`Using '+' operator : `  , t1 + " " + t2)

console.log("Repeat ".repeat(4))
*/
/* ?                                Trim functions

var text = "      Hello   there       "
console.log(text.trim())
console.log(text.trimEnd())
console.log(text.trimStart())
*/
// ?                                Searching functions

// * indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found

var sent = "Hey there , my name is Srajan"
console.log(sent.indexOf('y'))
console.log(sent.indexOf('Srajan'))
console.log(sent.indexOf('srajan')) // case sensitive search 

// * lastIndexOf() method returns the index of the last occurrence of a specified text in a string

var sent = "locate the locate"
console.log("Last index of locate : " , sent.lastIndexOf('locate'))

console.log("First index of locate : " , sent.indexOf('locate'))



// little test :
var ts = "findMe"
console.log("TEST 1 : " , ts.indexOf('find'))
console.log("TEST 1.1 : " , ts.indexOf('Me'))
// gives index even if substring is joined with other string parts and not independent

