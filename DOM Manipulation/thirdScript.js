// querySelector & querySelectorAll (More Powerful Selection)
const firstBtn = document.querySelector("button"); // grabs first button in the document
// to see this work, try adding a button at the top most part inside body tag
console.log(firstBtn);

const allBtns = document.querySelectorAll("button"); // grabs all the button in the document
console.log(allBtns);
const allList = document.querySelectorAll("li");
console.log(allList);

const specialDiv = document.querySelector(".specialDiv"); // first element with class="special"
console.log(specialDiv);

// * Creating Elements : append & prepend (Dynamic)
const newDiv = document.createElement("div");
newDiv.textContent = "Hi, i am new div here";
document.body.append(newDiv); // adds at the end
document.body.prepend(newDiv); // adds at the start
// ! Note you won't see 2 different divs on top & bottom - because in the above two lines of code the same div first appends (at the bottom), then prepend function takes the same div at the top, the line at the end will prevail

//  insertAdjacentHTML (Fast HTML Injection) -> Inserts HTML without replacing existing content.
// Positions : beforebegin, afterbegin, beforeend, afterend.
const lst = document.querySelector("ul");
lst.insertAdjacentHTML("beforeend", "<li>New beforeend Item</li>"); // Adds at the end of <ul>
lst.insertAdjacentHTML("afterbegin", "<li>New afterbegin item</li>");
lst.insertAdjacentHTML("beforebegin", "<li>New beforebegin item</li>");
lst.insertAdjacentHTML("afterend", "<li>New afterend item</li>");

// remove() & replaceWith() (Element Removal/Replacement)
// remove() → Deletes an element.
// replaceWith() → Replaces an element with another.

const oldElt = document.querySelector(".oldDiv");
const newElt = document.createElement("div");
document
  .getElementById("changeOldDiv")
  .addEventListener("click", function (event) {
    newElt.textContent = "I am New!";
    oldElt.replaceWith(newElt); // replacement
  });
document
  .getElementById("removeOldDiv")
  .addEventListener("click", function (event) {
    oldElt.remove(); // removal
  });

// Cloning DOM Elements using "cloneNode"
// Deep Copy - including children
// Shallow Copy - Only the element itself
// ? Process = select some original/exising element -> clone -> append/prepend or showcase in the DOM ~ after cloning the cloned elements won't appear by itself

const originalDiv = document.querySelector(".originalDiv");
const clonedDiv = originalDiv.cloneNode(true); // true = deep copy
document
  .getElementById("deepCopyBtn")
  .addEventListener("click", function (event) {
    document.body.append(clonedDiv);
  });
// ! Note - to make a shallow copy, everything would be same, but we will not pass 'true' as an argument in that case

// toggle classes - no need to write lengthy classList.add & classList.remove code, just toggle it

const torchBox = document.querySelector(".torch-box");
document.getElementById("toggleTorchBtn").addEventListener("click", () => {
  torchBox.classList.toggle("torch-on");
});
