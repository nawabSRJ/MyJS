// * Iterating only keys
const person = {
    fname : "Srajan",
    lname : "Saxena",
    age : 19,
    hobby : ["cricket" , "cycling"]
}

for(key in person){
    console.log(key , person.key)   // undefined here in sec. st. // ! don't do this 
}
for(key in person){
    console.log(key , person[key])  // proper value here in sec. st. // * use [] 
}
// * Better & Cleaner code for the above task :
for(k in person){
    console.log(`${k} : ${person[k]}`)
}

// ? 2nd Method - Using Object.keys()

for(let key in Object.keys(person)){
    
}