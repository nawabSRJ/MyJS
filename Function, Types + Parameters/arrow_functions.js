// * More on arrow functions
// ? Mostly used in frameworks like React etc.

// * example of arrow function
const isEven = (num) =>{
    num % 2 === 0 ? console.log("Yes , Even") : console.log("Not Even");
}

isEven(7)

const isOdd = (num)=>{
    num % 2 === 0 ? console.log("Not Odd") : console.log("Yes, Odd")
}

isOdd(5)



// ! Implementation of 'this' keyword in arrow function is different from other functions

