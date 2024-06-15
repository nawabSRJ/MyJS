const numbers = [2,7,10,12,15,18,21,25]
const even = numbers.filter((number) => number % 2 == 0);  
console.log(even)

// ? what if you wanted to return the index of the even elements

const evenOdd = numbers.map((number , index) => {
    if (number % 2 == 0) {
        return index;
    }else{
        return -1; // not an even
    }
})
console.log(evenOdd)

// ! the above function will process on all the elements thus we cannot just populate the array with even indexes ~ here is how you can do that:

const indices = numbers.map((_, index) => index)
const evenIndices = indices.filter((ind) => numbers[ind] % 2 == 0)  // return the ind on which even element is present in the numbers array
console.log("Even elements in numbers array are at : " , evenIndices)

// * Note : This is how you have to be clear on where to use filter and where to use map , and also use both of them together to simplify complex logic and replace loops
