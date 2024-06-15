// default parameters 

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);   // ? Note : if the func. call contains the arg. then it's values will be given preference else the default parameter value will be taken when the actual arg is not given
const ans2 = addTwo(7); 
console.log(ans);
console.log(ans2);

// Rest Parameters

// spread operator will make all other parameters fall in the 'c' variable
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(3,4,5,6,7,8,9);

// * Tip : This feature can be used in some cases where there are many args and all of them are related , and some operation is to be performed on them like :

// for 'n' no. of parameters , you don't have to declare 'n' no. of variables
function addAll(...numbers)     
{
    console.log("We got :" , numbers  , typeof numbers)
    let total = 0;
    for(let number of numbers){
        total += number
    }
    console.log("Total is : " , total)
}

addAll(1,5,2,8)