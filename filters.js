const filtersOpen = document.querySelector('.filters-mobile-open'),
  filtersClose = document.querySelector('.filters-mobile-close'),
  filtersSubmit = document.querySelector('.filters-mobile-submit'),
  filters = document.querySelector('.filters-mobile'),
  productList = document.querySelector('.product-cards-list'),
  footer = document.querySelector('.footer');

filtersOpen.addEventListener('click', () => {
  filters.classList.add('filters-open');
  productList.style.display = 'none';
  footer.style.display = 'none';
  document.body.classList.add('filters-active');
});

filtersClose.addEventListener('click', () => {
  filters.classList.remove('filters-open');
  productList.style.display = 'grid';
  footer.style.display = 'block';
  document.body.classList.remove('filters-active');
});

filtersSubmit.addEventListener('click', () => {
  filters.classList.remove('filters-open');
  productList.style.display = 'grid';
  footer.style.display = 'block';
  document.body.classList.remove('filters-active');
});
