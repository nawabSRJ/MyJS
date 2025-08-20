// flow of DOM Manipulation :
// 1 - Grab the element
// 2 - Listen to the events happening on the grabbed element
// 3 - Perform some action based on the event listening

// const hold = document.getElementById('changeTextBtn');
// console.log(hold); // * we can grab an element in an array, as well chain the event listening like this :

document.getElementById("changeTextBtn").addEventListener("click", () => {
  // perform action on that event
  // document.getElementById('para1').textContent="New text after button click!!"; // * works
  document.querySelector("#para1").textContent =
    "New text using query selector"; // * works
  console.log("Using the arrow function :\n", this); // we will get window object since we are using the arrow function
  // ! if we used function keyword then we would have got some other output i.e the current context and not the global context that we got using arrow function
});

document.getElementById("changeTextBtn").addEventListener("click", function () {
  console.log('Using the "function" keyword :\n', this);
});

document.getElementById("highlightBtn").addEventListener("click", function () {
  const cityList = document.getElementById("cityList");
  cityList.firstElementChild.classList.add("highlighter"); // * this will make change in the first child itself
  // cityList.firstChild.textContent="New City"; // * this will create a new element and make it the first one
});

// ? but what if we have to perform some operation on the nth element of a nested tag/block

document
  .getElementById("highlightNthBtn")
  .addEventListener("click", function () {
    // get the number from the input
    const cityList = document.getElementById("cityList");
    const nthChild = document.getElementById("cityHighlighterInput").value - 1; // because index - 1 = position
    cityList.children[nthChild].classList.add("highlighter");
  });

// ? What if we have to apply some operation on the basis of an interval, like only even numbered children of a list

document.getElementById("evenCityBtn").addEventListener("click", () => {
  // * method 1
  // make an array -> put even values of the interval -> loop on the array -> highlight those number elements

//   const arr = [2, 4, 6];
//   arr.forEach(function (val) {
//     // for position
//     cityList.children[val - 1].classList.add("highlighter");
//   });

  // * method 2
  // treat the list itself as an array and looping through it mod with 2, if result is equal to 0, then that li element is an even and therefore highlight it
  Array.from(cityList.children).forEach(function (child,index) {
    // position = index-1 hence the mod should be 1 for highlighting even numbered li
    if(index % 2 === 1){
        child.classList.add('highlighter');
    }
  });
});


// changing order to espresso

document.getElementById('changeOrderBtn').addEventListener('click', ()=>{
  document.getElementById('order').textContent="Order : Espresso";
})

// adding new item to shopping list
document.getElementById('addItemBtn').addEventListener('click', ()=>{
  // creating a new item
  const newItem = document.createElement('li');
  newItem.textContent='Eggs';
  document.getElementById('shoppingList').appendChild(newItem);
})


// removing DOM elements 
// 1 - last child

document.getElementById('removeTaskBtn').addEventListener('click', function(){
  const taskList = document.getElementById('taskList');
  const lastTask = taskList.lastElementChild;

  if(lastTask){
    // remove
    taskList.removeChild(lastTask);
  }
  else{
    // no task to remove
    alert('No more task to remove')
  }
})

// removing DOM Elements (nth task/nth child)
document.getElementById('removeNthBtn').addEventListener('click', function(){
  const taskNumber = parseInt(document.getElementById('removeTaskInput').value);
  const taskList = document.getElementById('taskList');
  const tasks = taskList.children;

  // check if input is in valid range 
  if(taskNumber < 1 || taskNumber>tasks.length){
    alert(`Please enter a number between 1 and ${tasks.length}`);
    return;
  }

  // remove the nth task (0-based indexing)
  taskList.removeChild(tasks[taskNumber-1]);
})

