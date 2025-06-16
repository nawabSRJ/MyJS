// * A callback function in JavaScript is a function passed as an argument to another function, which is then invoked (called back) inside the outer function to complete some kind of action.


function goodbye(){
    console.log(" Goodbye!!")
}
function greet(name , callback){
    console.log('Hello ' + name)
    callback()
}

greet('Srajan' , goodbye)
