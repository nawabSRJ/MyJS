// ? Used to map a function over all the elements of an array and thus populate a new array

old = [1,2,3,4]
newArr = old.map(elt => elt * 2)    // callback function is used (arrow func here)
console.log(newArr)

// Syntax is : .map(callback())
// syntax of callback should be : callback(currentValue , index)

// * Works with array of objects as well
const users = [
    {first : "John" , second : "Doe"},
    {first:"Srajan" , second:"Saxena"}
]

const full = users.map((user , place) => `${user.first} ${user.second} at index ${place}`) // place parameter is index (refer syntax above)
console.log(full)

