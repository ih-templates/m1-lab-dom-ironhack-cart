var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * Steps
 * 1. 
 */

/**
 * Resources
 * 
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

let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');   
for(let i = 0; i < deleteBtnCollection.length;i++){   
  deleteBtnCollection[i].onclick = removeProduct; 
}

function removeProduct(event) { 
  event.currentTarget.parentElement.parentElement.remove(); 
} 

let createBtn = document.querySelector("#create");  // Step 2: create a variable for the create button
createBtn.onclick = addNewProduct;    // Step 3: create an onclick event for the create button

function addNewProduct(event) {
  console.log("what is the type of event? ", typeof event.currentTarget)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);

  let productName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;
  let price = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
  let rowHTML = ""

  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = newRowInnerHtml;
  newRow.querySelector('.btn-delete').onclick = removeCh;
  console.log(document.getElementsByTagName('tbody'))
  document.getElementsByTagName('tbody')[0].appendChild(newRow);
}