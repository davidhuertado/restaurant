function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.appendChild(createNav());
  return header;
}

function createNosotros() {
  const nosotrosSection = document.createElement('section');
  nosotrosSection.classList.add('nosotros-section');

  const pizzaDivNosotros = document.createElement('div');
  pizzaDivNosotros.classList.add('pizza-div');
  nosotrosSection.appendChild(pizzaDivNosotros);

  const pizzaNosotros = document.createElement('img');
  pizzaNosotros.classList.add('index-pizza');
  pizzaNosotros.src = 'resources/pizza2.png';
  pizzaDivNosotros.appendChild(pizzaNosotros);

  const nosotrosText = document.createElement('div');
  nosotrosText.classList.add('nosotros-text');
  nosotrosSection.appendChild(nosotrosText);

  const nosotrosCard = document.createElement('div');
  nosotrosCard.classList.add('nosotros-card');
  nosotrosText.appendChild(nosotrosCard);

  const nosotrosH2 = document.createElement('h2');
  nosotrosH2.classList.add('nosotros-h2');
  nosotrosH2.textContent = 'Probá la mejor pizza';
  nosotrosCard.appendChild(nosotrosH2);

  const nosotrosP = document.createElement('p');
  nosotrosP.classList.add('nosotros-p');
  nosotrosP.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia explicabo eos voluptatem molestias exercitationem. Molestiae suscipit voluptatem omnis placeat.';
  nosotrosCard.appendChild(nosotrosP);

  return nosotrosSection;
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
  nosotrosBtn.classList.add('nav-li');
  nosotrosBtn.textContent = 'Nosotros';
  navUl.appendChild(nosotrosBtn);

  const menuBtn = document.createElement('li');
  menuBtn.classList.add('nav-li');
  menuBtn.textContent = 'Menu';
  navUl.appendChild(menuBtn);

  const contactanosBtn = document.createElement('li');
  contactanosBtn.classList.add('nav-li');
  contactanosBtn.textContent = 'Contactanos';
  navUl.appendChild(contactanosBtn);

  return navBar;
}
function initializeWebsite() {
  const contentDiv = document.querySelector('#content');
  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createNosotros());
}
function sayHi() {
  alert('hi');
}

export default initializeWebsite;
// export default sayHi;
