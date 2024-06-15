const myvar = 1;

function Func1(){
    // console.log("Outer initial" , myvar)
    const myvar = 2;
    console.log("Outer final" , myvar)

    function Func2(){
        console.log("Inner initial" , myvar)
        // const myvar = 3;
        console.log("Inner final" , myvar)
        
    }
    Func2();
}

Func1()