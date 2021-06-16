function createContactanos() {
  const contactanosSection = document.createElement('section');
  contactanosSection.classList.add('contactanos-section');

  const contactanosContainer = document.createElement('div');
  contactanosContainer.classList.add('contactanos-container');
  contactanosSection.appendChild(contactanosContainer);

  const telefonosContainer = document.createElement('div');
  telefonosContainer.classList.add('telefonos-container');
  contactanosContainer.appendChild(telefonosContainer);

  const direccionContainer = document.createElement('div');
  direccionContainer.classList.add('direccion-container');
  contactanosContainer.appendChild(direccionContainer);

  // All the telefonos Elements
  const telefonosH3 = document.createElement('h3');
  telefonosH3.classList.add('contactanos-h3');
  telefonosH3.textContent = 'Teléfonos';
  telefonosContainer.appendChild(telefonosH3);

  const telefonosUl = document.createElement('ul');
  telefonosContainer.appendChild(telefonosUl);

  const telefonoLiArr = [];
  const flaticonArr = [];
  const imgArr = [];
  const spanArr = [];
  for (let i = 0; i < 2; i++) {
    telefonoLiArr[i] = document.createElement('li');
    telefonoLiArr[i].classList.add('telefonos-li');
    telefonosUl.appendChild(telefonoLiArr[i]);

    flaticonArr[i] = document.createElement('div');
    flaticonArr[i].classList.add('flaticon');
    telefonoLiArr[i].appendChild(flaticonArr[i]);

    imgArr[i] = document.createElement('img');
    imgArr[i].classList.add('phones-img');
    flaticonArr[i].appendChild(imgArr[i]);

    spanArr[i] = document.createElement('span');
    spanArr[i].classList.add('contactanos-text');
    telefonoLiArr[i].appendChild(spanArr[i]);
  }

  imgArr[0].src = 'resources/telephone.svg';
  imgArr[1].src = 'resources/whatsapp.svg';

  spanArr[0].textContent = '(11)-9999-9999';
  spanArr[1].textContent = '(11)-9999-9999';

  //Direcion elements
  const direccionH3 = document.createElement('h3');
  direccionH3.classList.add('contactanos-h3');
  direccionH3.textContent = 'Dirección';
  direccionContainer.appendChild(direccionH3);

  const direccionP = document.createElement('p');
  direccionP.classList.add('contactanos-text', 'direccion');
  direccionP.textContent = 'Avenida Corrientes 12xx, CABA';
  direccionContainer.appendChild(direccionP);

  return contactanosSection;
}

export default createContactanos;
