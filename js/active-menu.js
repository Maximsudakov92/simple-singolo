const menu = document.getElementById('menu');


menu.addEventListener('click', (event) => {
  menu.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
  event.target.classList.add('active');
})