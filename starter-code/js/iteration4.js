var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * Steps for iteration 4
 * 1. make a collection of all delete buttons
 * 2. loop through collection and add an onclick event that will call a function removeProduct() 
 *    (or whatever you want to name the fucntion) that will remove the whole row (i.e. the product)
 * 3. Create the function to remove the row (i.e. the product) where delect was clicked 
 */

/**
 * Resources
 * onclick - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
 * getElementsByClassName() - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 
 * Intro to events - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 
 * Event - https://developer.mozilla.org/en-US/docs/Web/API/Event 
 * Event.currentTarget - https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
 * Node.parentElement - https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement 
 * Comparison of Event Targets - https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets  
 * ChildNode.remove() - https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove 
 */

function updateSubtot(product) {
  // Iteration 1.1 

  let priceUnit = product.querySelector("td.pu > span").innerText;
  let quantity = product.querySelector("td.qty > label > input[type=number]").value;
  let subTotal = priceUnit * quantity;

  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let productArr = document.querySelectorAll('tr');
  let sum = 0;

  for(let i = 1; i < productArr.length; i++){
    let subTotal = updateSubtot(productArr[i]);
    let currentProductSubtotal = productArr[i].querySelector("td.subtot > span");
    currentProductSubtotal.innerText = subTotal;
    sum += subTotal;
  }

  let totalLocation = document.querySelector("body > h2 > span");
  totalLocation.innerText = sum;
}
$calc.onclick = calcAll;

// HTML collection you can only loop using a regualr for loop
// NodeList (you can create a node list using querySelectorAll) you can use array methods such as forEach
// NodeListhttps://developer.mozilla.org/en-US/docs/Web/API/NodeList

let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');    // Step 1: make a collection of all delete buttons
for(let i = 0; i < deleteBtnCollection.length;i++){    // Step 2: loop through collection to add onclick event that will remove the product
  deleteBtnCollection[i].onclick = removeProduct; 
}

function removeProduct(event) { // Step 3: create the function to remove the row (i.e. the product) where delect was clicked
  console.log("what", typeof event.currentTarget)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);
  console.log("What is the parent element of the current target: ", event.currentTarget.parentElement);
  console.log("What is the parent of the parent of the current target: ", event.currentTarget.parentElement.parentElement);
  event.currentTarget.parentElement.parentElement.remove(); 
 } 