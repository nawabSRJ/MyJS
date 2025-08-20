// ? Where do we use reduce?
// * When we have to traverse the entire array and then come up with one single value after iteration, then we use the reduce function.

const arr = [1,2,3,4,5]
// task - find the sum of all the elements in the array

// Syntax of reduce arr.reduce(Callback(accumulator,current), initial) - here basically, current will hold each value of the array iteratively, accumulator is a variable which we can used to perform operations like addition, substraction or whatever, mostly on the value of current, and then at last 'initial' specifies the initial/default value of the accumulator

const sumOfall = arr.reduce(function(acc,curr){
    // curr will receive all the values of arr one by one
    acc += curr;
    return acc;
},0)
console.log(`The sum of all the elements in the [${arr}] is ${sumOfall}`);

// task 2 - find the maximum value in the array

const findMax = arr.reduce(function(acc,curr){
    if(curr>acc){
        acc = curr;
    }
    return acc;
},0)
console.log(`The maximum value in the [${arr}] is ${findMax}`);


// tricky question : write a function using reduce to find the frequency of different ages in an array of objects 
const details = [
    {firstName : 'Srajan' , lastName:'Saxena', age:20},
    {firstName : 'Virat' , lastName:'Kohli', age:36},
    {firstName : 'Rohit' , lastName:'Sharma', age:20},
]

const output = details.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] += 1;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

console.log(output);
