// ? (STAR) Q11. Capitalize first letter of each word

// (Asked at: Accenture, Capgemini — string manipulation round)

// Input:  "hello world from srajan"
// Output: "Hello World From Srajan"

function Capitalize(input){
    var words = input.split(' ');
    var output = '';
    for(let i = 0; i < words.length; i++){
        output += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
    }
    console.log(output);
}

Capitalize('hello world from srajan')