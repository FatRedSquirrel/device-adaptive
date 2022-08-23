const cart = document.querySelector('.cart-list'); 

cart.addEventListener('click', (e) => {
  if (e.target.classList.contains('item-delete')) {
    e.target.closest('.cart-item').classList.add('deleted');
  }
});