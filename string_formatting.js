// * just as in python we have f-strings for string formatting , we use '$' sign in js

// ! we can only do this if we use Template String i.e back-tics to create strings
var fname = "Srajan"
var age = 19
var sent = `We know that ${fname} is a good boy , his age is ${age}`
console.log(sent)

// ! can also be done like this :
console.log(fname + " is a very good boy , he is " + age + " years of age")
