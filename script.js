const headerNav = document.querySelector('.header__navigation');
const mobileIcon = document.querySelector('.header__mobile-icon');

mobileIcon.addEventListener('click', (e) => {
  headerNav.classList.toggle('show');
  mobileIcon.classList.toggle('hide');
});
