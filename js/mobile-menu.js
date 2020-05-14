let openMenuButton = document.getElementById('menu-button');
let closeMenuButton = document.getElementById('menu-close-button');
let menu = document.querySelector('.region-primary-menu');

openMenuButton.addEventListener('click', function() {
	menu.style.transform = 'translate(0%,0%)';
	menu.style.opacity = '100%';
});

closeMenuButton.addEventListener('click', function() {
  menu.style.transform = 'translate(-100%,0%)';
  menu.style.opacity = '0%';
});
