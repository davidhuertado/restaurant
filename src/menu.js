function createMenu() {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu-section');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuSection.appendChild(menuContainer);

  const pizzaMenusArr = [];
  const imgContainerArr = [];
  const menuImgArr = [];
  const pizzaDescArr = [];
  const pizzaNameArr = [];
  const pizzaIngArr = [];

  for (let i = 0; i < 3; i++) {
    pizzaMenusArr[i] = document.createElement('div');
    pizzaMenusArr[i].classList.add('pizzas-menu');
    menuContainer.appendChild(pizzaMenusArr[i]);

    imgContainerArr[i] = document.createElement('div');
    imgContainerArr[i].classList.add('img-container');
    pizzaMenusArr[i].appendChild(imgContainerArr[i]);

    menuImgArr[i] = document.createElement('img');
    menuImgArr[i].classList.add('menu-img');
    imgContainerArr[i].appendChild(menuImgArr[i]);

    pizzaDescArr[i] = document.createElement('div');
    pizzaDescArr[i].classList.add('pizza-description');
    pizzaMenusArr[i].appendChild(pizzaDescArr[i]);

    pizzaNameArr[i] = document.createElement('h3');
    pizzaNameArr[i].classList.add('pizza-name');
    pizzaDescArr[i].appendChild(pizzaNameArr[i]);

    pizzaIngArr[i] = document.createElement('p');
    pizzaIngArr[i].classList.add('pizza-ingredients');
    pizzaDescArr[i].appendChild(pizzaIngArr[i]);
  }

  menuImgArr[0].src = 'resources/pizza-margarita.png';
  menuImgArr[1].src = 'resources/pizza-calabresa.png';
  menuImgArr[2].src = 'resources/pizza-veggie.png';

  pizzaNameArr[0].textContent = 'Pizza Margarita';
  pizzaNameArr[1].textContent = 'Pizza Calabresa';
  pizzaNameArr[2].textContent = 'Pizza Veggie';

  for (let i = 0; i < pizzaIngArr.length; i++) {
    pizzaIngArr[i].textContent = 'Lorem ipsum dolor sit amet consectetur.';
  }

  return menuSection;
}

export default createMenu;
