// * task - without making multiple functions  use HOF logic to calculate area, circumference and diameter of a circle based on the radius 

const calculate = function(radius, logic){
    return logic(radius);
}

const area = (radius)=>{
    return Math.PI * radius * radius;
}

const circumference = (radius) =>{
    return 2 * Math.PI * radius;
}

const diameter = (radius)=>{
    return 2 * radius;
}

console.log(calculate(2,area));

// ? What is a HOF? 
// * Ans - Any fuction that takes another function as an argument or return a function is attributed as a HOF.

// * map function in js is also a HOF ~ so if there is an array of radius and we have to calculate the area of all the elements in that radius then :
radiusArr = [1,2,3]

console.log(radiusArr.map(area)) // correct ✅
// hence we can say that the calculate function that we have made above is like an implementation of map function