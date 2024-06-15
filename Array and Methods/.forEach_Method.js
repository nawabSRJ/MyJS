// todo - a function which display the index and corresponding element @ that index from an array

// * Naive Approach : 
numbers = [4,7,12,18]

function showNums(number , index){
    console.log(`At index ${index} , number is ${number}`)
}
for(let i = 0; i < numbers.length; i++){
    showNums(numbers[i] , i);
}console.log("\n")

// * Using .forEach Method :

numbers.forEach(showNums)   // * showNums is acting as a callback function
// ? by default forEach passes the element first and then the index
// * Syntax : .forEach (callbackFunc)
// * Note : the syntax of callback func is also defined as : callback(element , index) 

// todo - some complex iteration logic 
console.log("\n")
const work = [
    {id: 1, desc: "Work 1", done: false},
    {id: 2, desc: "Work 2", done: true},
    {id: 3, desc: "Work 3", done: false},
]

work.forEach(item=>{
    if(item.done){
        console.log(`${item.desc} is completed`)
    }
    else{
        console.log(`${item.desc} is not done`)
    }
})

// todo - store result in some other array
const single = [1,5,7,10,18]
const double = single.forEach(item=>{
    item*2
})
console.log("Doule array : " , double)