// ? Question - Q9. Reverse a String

// (Asked at: Infosys, Cognizant, TCS)

// Write a program that takes a string and prints it reversed.
// Input:  "hello"
// Output: "olleh"
var rev = '';
function reverseString(input){
    for(let i = input.length-1; i >= 0; i--){
        rev += input[i];
    }
    console.log(rev);
}

reverseString('hello')