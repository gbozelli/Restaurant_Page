import { home } from './home';
import { about } from './about';
import { menu } from './menu';

console.log("Working!");

const content = document.querySelector('#content');
const header = document.createElement('div');
header.classList.add('header');

const bhome = document.createElement('button');
bhome.setAttribute('id', 'home');
bhome.textContent = 'Home';

const bmenu = document.createElement('button');
bmenu.setAttribute('id', 'menu');
bmenu.textContent = 'Menu';

const babout = document.createElement('button');
babout.setAttribute('id', 'about');
babout.textContent = 'About';

header.appendChild(bhome);header.appendChild(bmenu);
header.appendChild(babout);

content.appendChild(header);

bhome.addEventListener('click', () => {
  home();
})

bmenu.addEventListener('click', () => {
  menu();
})

babout.addEventListener('click', () => {
  about();
})