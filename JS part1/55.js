// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());
// ans()    // this will print 'hello world' when we use console.log() in 'hello' func instead of return 
