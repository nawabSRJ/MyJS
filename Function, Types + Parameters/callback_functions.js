function goodbye(){
    console.log(" Goodbye!!")
}
function greet(name , callback){
    console.log('Hello ' + name)
    callback()
}

greet('Srajan' , goodbye)