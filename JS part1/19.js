
// switch statement 


// let day = 7; 


// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }


let day = 7;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}


let choice = 'Burger';

switch(choice){
    case 'Pizza':
        console.log('Not Match');
        break;
    case 'Mango':
        console.log('Not match');
        break;
    case 'burger':
        console.log('Matched but not case sensitive');
        break;
    case 'Burger':
        console.log('Mathed and case sensitive');
}
// ! Note:
// * switch statement is case sensitive!!