// This technique is used in React

const person = {
    fname : "Srajan",
    lname : "Saxena",
    age : 19,
    hobby : ["Cricket" , "Movies"]
}

// * Naive Method :
function Details(obj){
    console.log(obj.fname)
    console.log(obj.age)
    console.log(obj.hobby)
    console.log("\n")
}

// * Using Parameter destructuring to access only required attributes

function Details2({fname , age }){      // key names should be consistent 
    console.log(fname);
    console.log(age);   // now you don't need to use dot operator here to access object values
}


Details(person)
Details2(person)