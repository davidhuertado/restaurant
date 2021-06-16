import contentDiv from './index.js';
import createNosotros from './nosotros.js';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'navbar');

  const emblem = document.createElement('div');
  emblem.classList.add('emblem');
  navBar.appendChild(emblem);

  const pizzaLogo = document.createElement('img');
  pizzaLogo.classList.add('pizza-logo');
  pizzaLogo.src = 'resources/pizza.png';
  emblem.appendChild(pizzaLogo);

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('title');
  headerTitle.innerHTML = '<em>BA pizza</em>';
  emblem.appendChild(headerTitle);

  const ulBox = document.createElement('div');
  ulBox.classList.add('ul-box');
  navBar.appendChild(ulBox);

  const navUl = document.createElement('ul');
  navUl.classList.add('nav-ul');
  ulBox.appendChild(navUl);

  const nosotrosBtn = document.createElement('li');
  nosotrosBtn.classList.add('nav-li', 'nosotros-nav');
  nosotrosBtn.textContent = 'Nosotros';
  navUl.appendChild(nosotrosBtn);

  const menuBtn = document.createElement('li');
  menuBtn.classList.add('nav-li', 'menu-nav');
  menuBtn.textContent = 'Menu';
  navUl.appendChild(menuBtn);

  const contactanosBtn = document.createElement('li');
  contactanosBtn.classList.add('nav-li', 'contactanos-nav');
  contactanosBtn.textContent = 'Contactanos';
  navUl.appendChild(contactanosBtn);

  return navBar;
}
function initializeWebsite() {
  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createNosotros());
  return contentDiv;
}

export default initializeWebsite;
