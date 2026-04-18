// ? Q10. FizzBuzz

// (Asked at literally every company — Google, Amazon, startups, everything)

// Print numbers 1 to 50. But:

// If divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"
// Otherwise → print the number

for(let i = 1; i <= 50; i++){
    if(i%3===0 && i%5!==0){
        console.log('Fizz');
    }
    else if(i%3!==0 && i%5===0){
        console.log('Buzz');
    }
    else if(i%3===0 && i%5===0){
        console.log('FizzBuzz')
    }else{
        console.log(i);
    }
    
}