// task 1 : Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(str){
    const num = Number(str);
    return isNaN(num) ? "Not a Number" : num;
}
console.log('TASK 1 : ')
console.log(stringToNumber("42"));       // 42
console.log(stringToNumber("3.14"));     // 3.14
console.log(stringToNumber("abc"));      // "Not a number"
console.log(stringToNumber(""));         // 0
console.log(stringToNumber("123abc"));   // "Not a number"


// -----------------------------------------------

// task 2 : Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.


function flipBoolean(inp){
    const blnEq = Boolean(inp); // gets the boolean equivalent 
    return !blnEq;        // flips and returns
    // shorter : return !Boolean(inp)
}

console.log('\n\nTASK 2 : ')
console.log(flipBoolean(1));
console.log(flipBoolean(false));

// ----------------------------------------------------------------------------

// task 3 : Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input){
    if(!isNaN(Number(input))){
        return "I'm a number!";
    }
    else if(typeof input === "string"){
        return "I'm a string!";
    }
    else{
        return "I don't know!";
    }
}

console.log('\n\nTASK 3 : ')
console.log(whatAmI("123"));     // "I'm a number!"
console.log(whatAmI("hello"));   // "I'm a string!"
console.log(whatAmI(456));       // "I'm a number!"
console.log(whatAmI(true));      // "I don't know!"






