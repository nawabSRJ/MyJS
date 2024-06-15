// ! problem :
key1 = "mykey1"
key2 = "mykey2"

val1 = "myval1"
val2 = "myval2"

const obj1 ={
    key1 : val1,
    key2 : val2,
}
console.log(obj1)   // { key1: 'myval1', key2: 'myval2' } ~ key values in variables are not computed
// to solve this problem and make the keys value computed from the variable holding it

const obj2 = {}

obj2[key1] = val1;
obj2[key2] = val2;
console.log(obj2)   // * problem fixed