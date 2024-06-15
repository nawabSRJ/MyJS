// * let and const are block scope ~ can only be accessed in the blocks they are declared

// * var is function scope ~ can be accessed in the function declared and in js , we consider that every piece of code is inside a main function (virtually) thus it makes 'var' a global scope wherein we can use it anywhere in the code after declaring it. 

// console.log(myvar)   undefined since not declared before
{
    var myvar = 1;
    let myvar2 = 2;

    const myvar3 = 3;
    console.log("inside : " , myvar2)
    console.log("inside : " , myvar3)
}
console.log(myvar)

// console.log("outside : " , myvar2)  Error  
// console.log("outside : " , myvar3)  Error


