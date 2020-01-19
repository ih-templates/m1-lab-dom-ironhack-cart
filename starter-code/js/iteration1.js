var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * Steps
 * 1. Create a variable for the product (i.e. the row with all the product information) inside calcAll
 * 2. Create a variable for the subTotal inside calcAll
 * 3. Set the subTotal = the return value fo updateSubtot
 * 4. Create a variable for the value of price unit inside updateSubtot
 * 5. Create a variable for the value of quantity inside updateSubtot
 * 6. Create a subTotal variable and set it = to priceUnit * quantity
 * 7. Set the sub total value = subTotal inside calcAll
 */

function updateSubtot($product) {
  // Iteration 1.1 
  let priceUnit = $product.querySelector("td.pu > span").innerText;
  let quantity = $product.querySelector("td.qty > label > input[type=number]").value;
  let subTotal = priceUnit * quantity;

  return subTotal;
}

function calcAll() {
  // Iteration 1.2

  let product = document.querySelector("#cart > tbody > tr:nth-child(1)")
  let subTotal = updateSubtot(product)

  document.querySelector("#cart > tbody > tr:nth-child(1) > td.subtot > span").innerText = subTotal;
}
$calc.onclick = calcAll;