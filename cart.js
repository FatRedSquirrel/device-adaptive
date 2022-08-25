let deleteItemFromCartButtons = document.getElementsByClassName('item-delete');

for (let i = 0; i < deleteItemFromCartButtons.length; i++) {
  let button = deleteItemFromCartButtons[i];
  button.addEventListener('click', removeCartItem);
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainers = document.getElementsByClassName('cart-item')[0]
  let cartItems = cartItemContainers.getElementsByClassName('cart-item-link')
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i]
    let priceElement = cartItem.getElementsByClassName('cart-item-price')[0]
    let price = parseFloat(priceElement.innerText)
    total = total + price
  }

  if (total <= 0 || isNaN(total)) {
    total = 0;
  }

  document.getElementsByClassName('cart-sum-price')[0].innerText = total
}
