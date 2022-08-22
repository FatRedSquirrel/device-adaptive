const burger = document.querySelector('.burger'),
  menu = document.querySelector('.mobile-menu'),
  overlay = document.querySelector('.overlay'),
  submenuOpen = document.querySelector('.submenu-open'),
  menuList = document.querySelector('.mobile-menu-list'),
  mobileBack = document.querySelector('.mobile-back-link'),
  submenu = document.querySelector('.submenu'),
  quantityInput = document.querySelector('.modal-form-input-quantity'),
  plus = document.querySelector('.quantity-button-plus'),
  minus = document.querySelector('.quantity-button-minus'),
  modalOpen = document.querySelector('.delivery-button'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal-close'),
  modalCloseMobile = document.querySelector('.modal-close-mobile');

  
// === menu ===
burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = 'hidden';
  menuList.classList.remove('transform');
});

overlay.addEventListener('click', () => {
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = 'auto';
});

mobileBack.addEventListener('click', () => {
  menuList.classList.remove('transform');
});

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('submenu-open')) {
    e.preventDefault();
    e.target.closest('.mobile-menu-list').classList.add('transform');
    e.target.closest('.mobile-menu-item').querySelector('.submenu').classList.add('transform');
  }

  if (e.target.classList.contains('mobile-back-link')) {
    e.preventDefault();
    e.target.closest('.mobile-menu-list').classList.remove('transform');
    e.target.closest('.submenu').classList.remove('transform');
  }
});
// === / menu ===


// === quantity ===
plus.addEventListener('click', () => {
  let quantity = Number(quantityInput.value);
  quantityInput.value = quantity + 1;

  if (quantity > 0) {
    quantityInput.classList.remove('invalid');
  }
});

minus.addEventListener('click', () => {
  let quantity = Number(quantityInput.value);
  quantityInput.value = quantity - 1;

  if (quantity < 1) {
    quantity = 0;
    quantityInput.value = quantity;
  }
});
// === / quantity ===



// === modal ===
modalOpen.addEventListener('click', () => {
  modal.classList.toggle('open');
});

modalClose.addEventListener('click', () => {
  modal.classList.toggle('open');
});

modalCloseMobile.addEventListener('click', () => {
  modal.classList.toggle('open');
});

// === / modal ===



// === slider ===
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let paginationButtons = document.getElementsByClassName("slider-pagination-button");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < paginationButtons.length; i++) {
    paginationButtons[i].className = paginationButtons[i].className.replace("slider-pagination-button-current", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  paginationButtons[slideIndex - 1].className += " slider-pagination-button-current";
}
// === / slider ===



// === services buttons ===
tabIndex = 1;
showTab(tabIndex);

function currentTab(n) {
  tabIndex = n;
  showTab(tabIndex);
}

function showTab(n) {
  let i;
  let tabs = document.getElementsByClassName("services-content");
  let servicesButtons = document.getElementsByClassName("services-button")
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  for (i = 0; i < servicesButtons.length; i++) {
    servicesButtons[i].classList.remove("services-button-current");
  }
  tabs[tabIndex - 1].style.display = "grid";
  servicesButtons[tabIndex - 1].classList.add("services-button-current");
}
// === / services buttons ===








