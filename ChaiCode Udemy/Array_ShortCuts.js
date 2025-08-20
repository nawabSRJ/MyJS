// todo - this file explore the short cut ways (or built-in methods) of solving most asked or very common array based questions

// task 1 - Write a function filterNumbers(arr) that returns only numbers from a mixed array 

function filterNumbers(arr){
    return arr.filter(item => typeof item === 'number')
}
console.log(filterNumbers(['srajan',1,2,false,true,"#",'123',undefined]))


// task 2 - Write a function reverseArray(arr) that reverses the array

function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray([1,2,3]))

// task 3 - Write a function findMax(arr) that returns the largest number in the array

function findMax(arr){
    return Math.max(...arr);    // de-structure the array and then find the max using the Math.max method provided by JS
}
console.log(`The maximum in the array is : ${findMax([1,2,3,4])}`)
// task 4 - Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr){
    return [...new Set(arr)];   // set contains only unique elements, typecasted to array
}
// function removeDuplicates2(arr){
//     return [new Set(arr)]; }
// ! Lot of other variations are not working for the above removeDuplicates function
console.log(`After removing duplicates : ${removeDuplicates([1,2,3,2])}`);
// console.log(`After removing duplicates : ${removeDuplicates2([1,2,3,2])}`);


// task 5 - Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr){
    return arr.flat();
}

console.log(`Array after flattening : ${flattenArray([1,2,3,4,[5,6,7],[8,9]])}`);
