// this file deals with questions that are related to the chaining of map, filter and reduce

const users = [
    {firstName : 'Srajan' , lastName:'Saxena', age:20},
    {firstName : 'Virat' , lastName:'Kohli', age:36},
    {firstName : 'Rohit' , lastName:'Sharma', age:20},
]

// Task - Create an array or directly print the first name of all the people whose age is less than 30

const lessThan30 = users.filter(function(val){
    if(val.age < 30){
        return val;
    }
}).map(function(val){
    return val.firstName;
})

console.log(lessThan30);
// shorthand for the above function :
const output1 = users.filter(x => x.age < 30).map(x => x.firstName);
console.log('With the shorthand code of lessThan30 : ',output1);

// perform the above task with only one reduce function

const lessThanThirty = users.reduce((res,user)=>{
    if(user.age<30){
        res.push(user.firstName);
    }
    return res;
},[])
console.log('Using the reduce function : ', lessThanThirty);
