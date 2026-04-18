// and  or operator 


let firstName = "arshit";
let age = 16;

if(firstName[0] === "H"){
    console.log("your name starts with H")
}

if(age > 18){
    console.log("you are above 18");
}


if(firstName[0] === "H" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}


if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}

// * Golden rule with OR AND:
// OR - Needs only one true to execute
// AND - Needs both true to execute
// In JS OR is ||, AND is &&

