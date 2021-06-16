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

export default createNosotros;
