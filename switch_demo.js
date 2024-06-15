// ? demo of switch statement in js

var fname = "Srajan"

switch(fname){
    case "Adi":
        console.log(`Name is ${fname}`)
        break
    case "srajan" :
        console.log("small s")
        break
    case "Srajan" :
        console.log("Capital S")
        break
    default :
        console.log("No match above , this is the last case always thus no need to put break after this")

}