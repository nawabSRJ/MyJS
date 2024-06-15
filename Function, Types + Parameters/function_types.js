// * Types : Normal , Func expression , Arrow Functions

// normal
function greet1(){
    console.log("hello")
}
// func. expression
const greet2 = function(){
    console.log("hello")
}
// arrow function
const greet3 = () =>{
    console.log("hello")
}

// * All the above do the same thing ~ function call would be same for all , but there must be only one function with a given name
greet3()