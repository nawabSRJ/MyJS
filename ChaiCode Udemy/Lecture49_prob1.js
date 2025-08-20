// write a function named processTeaOrder that takes another function makeTea as parameter and calls it with the argument 'earl grey'. Return the result of calling makeTea


function makeTea(args1){
    console.log(args1);
}

function processTeaOrder(makeTea){
    return makeTea('earl grey')
}
processTeaOrder(makeTea);