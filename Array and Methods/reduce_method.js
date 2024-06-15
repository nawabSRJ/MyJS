const nums = [1,2,7,3,4]

function addUp(accumulator , curr){
    return accumulator + curr
}
const add = nums.reduce(addUp , 0)
console.log(add , typeof add) // 10

// using arrow func:
const add2 = nums.reduce((acc , curr)=>{
    return acc+curr;
} , 2)  
console.log(add2 , typeof add2) // 12

// todo - finding the max value in the array
const maxi = nums.reduce((acc, curr) =>{
    return acc > curr ? acc : curr;         // shorthand
    // if(acc > curr){return acc}else{return curr} this statement is also correct                   
})
console.log(maxi)   

// todo - grouping objects by a property 
// ? brainstorm on this one 👇
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 21 },
    { name: 'Charlie', age: 25 }
];

const groupedByAge = people.reduce((accumulator, person) => {
    const age = person.age;
    if (!accumulator[age]) {
        accumulator[age] = [];
    }
    accumulator[age].push(person);
    return accumulator;
}, {});

console.log(groupedByAge);
// Output:
// {
//   '21': [{ name: 'Alice', age: 21 }, { name: 'Bob', age: 21 }],
//   '25': [{ name: 'Charlie', age: 25 }]
// }

