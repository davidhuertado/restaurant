import initializeWebsite from './website';
import createMenu from './menu.js';
import createContactanos from './contacto';

const contentDiv = initializeWebsite();

contentDiv.addEventListener('click', function (e) {
  //   console.log(e.target.classList);
  if (e.target.classList.contains('menu-nav')) {
    contentDiv.children[1].remove();
    contentDiv.appendChild(createMenu());
  } else if (e.target.classList.contains('contactanos-nav')) {
    contentDiv.children[1].remove();
    contentDiv.appendChild(createContactanos());
  } else if (e.target.classList.contains('nosotros-nav')) {
    contentDiv.children[1].remove();
    initializeWebsite();
  }
});
