var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * Steps
 * 1. Uncomment the <tfoot> from index.html
 * 2. Create a variable for the create button
 * 3. Create an onclick event for the create button that onclick will call a function to create a new row (I called mine addNewProduct
 * 4. Create a variable to hold the new tr element  
 * 5. Add the new row to the HMTL
 *    Look at the HTML using the inspector
 *    Inside <tbody> you should see the <tr> of the first product and then and empty <tr> tag
 *    How can we fix this?
 * 6. Create a variable that will hold the HTML for the new row that was added, you can get the HTML from index.html
 *    Look at the HTML using the inspector
 *    What's missing? the data from the input
 *    Think back to how we calculated the sum, how did we get the input from quantity
 * 7. Save the product name input into a variable
 * 8. Save the price input into a variable
 *    Now how do we add it to the inside of the <tr> element
 * 9. Add the HTML inside of the <tr> element
 *    But now the sum doesn't work
 * 10. Add the class "product" to the tr element
 *     But now delete doesn't  
 * 11. You have to add onclick event for the new delete button
 */

/**
 * Resources
 * querySelector
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
  console.log(productArr)

  for(let i = 1; i < productArr.length-1; i++){
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
  console.log("what is the type of event? ", typeof event)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);

  let newProduct = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;  // Step 4: save the product name input into a variable
  let newPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;      // Step 5: save the price input into a variable

  // Step 9: create a variable that will hold the HTML for the new row that was added, remember to add the data from input
  let rowHTML = `<td class="name">
    <span>${newProduct}</span>
  </td>

  <td class="pu">$<span>${newPrice}</span></td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>`;

  let newRow = document.createElement('tr');  // Step 6: create a variable to hold the tr element  
  newRow.classList.add('product');    // Step 7: add the class "product" to the tr element 
  newRow.innerHTML = rowHTML;   // Step 10: add the HTML inside of the <tr> element
  // cool, but why doesn't the delete button work?
  newRow.querySelector('.btn-delete').onclick = removeProduct; // Step 11: you have to add onclick event for the new delete button
  // console.log(document.getElementsByTagName('tbody'))
  document.querySelector("#cart > tbody").appendChild(newRow);  // Step 8: add the new row to the HMTL
  // why doesn't it work? because all we did was add a <tr> but there's nothing inside
}