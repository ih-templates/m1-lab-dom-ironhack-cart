var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * Steps
 * 1. Create a variable productArr using querySelectorAll("tr"), each row (i.e. product) is a <tr>
 * 2. Iterate through the array, skip the first index since it holds the header names
 * 3. Call updateSubtot inside of the loop to update the subTotal
 * 4. The code inside updateSubtot doesn't need to be updated if you used the code from iteration1.js
 * 5. Create a variable subtot inside the loop to hold the return value of updateSubtot
 * 6. Set the value of subtotal to subtot
 * 7. Create a variable sum that keeps gettings increased by subtot
 * 8. Set the value of total to sum
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

  for(let i = 1; i < productArr.length; i++){
    let subTotal = updateSubtot(productArr[i]);
    let currentProductSubtotal = productArr[i].querySelector("td.subtot > span");
    currentProductSubtotal.innerText = subTotal;
  }
}
$calc.onclick = calcAll;