const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  
  if (menu.classList.contains('open')) {
    menuIcon.textContent = 'close';
  } else {
    menuIcon.textContent = 'menu';
  }
});

const menuItems = document.querySelectorAll('header nav ul li a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
    menuIcon.textContent = 'menu';
  });
});

