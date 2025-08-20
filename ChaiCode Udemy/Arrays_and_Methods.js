// task 1 : Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(data){
    let ar = [];
    
    if(Array.isArray(data)){
        data.forEach(function(val){
            ar.push(...flattenArray(val));      // ? didn't understood
        })
    }else{
        ar.push(data);
    }
    return ar;
}

// my logic - traverse the array, find the type, if the type is array then recursively traverse it and append the elements

function flattenArray2(arr){
    let res = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            // recursion
            res.push(...flattenArray2(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }

    return res;
}

console.log(flattenArray2([1,2,3,4,[5,6,7],[8,9]]))