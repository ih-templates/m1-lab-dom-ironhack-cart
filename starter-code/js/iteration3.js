var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

/**
 * Steps
 * 1. Create a variable sum that keeps gettings increased by subtot
 * 2. Set the value of total to sum
 */

function updateSubtot(product) {
  // Iteration 1.1 
  // console.log("Inside updateSubtot")
  // console.log(product)

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
    // console.log(productArr[i]);
    let subTotal = updateSubtot(productArr[i]);
    let currentProductSubtotal = productArr[i].querySelector("td.subtot > span");
    currentProductSubtotal.innerText = subTotal;
    sum += subTotal;
  }

  let totalLocation = document.querySelector("body > h2 > span");
  totalLocation.innerText = sum;
}
$calc.onclick = calcAll;