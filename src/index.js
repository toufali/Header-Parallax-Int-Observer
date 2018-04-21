import './main.css';

function headerParallax() {
  var header = document.createElement('header');
  header.textContent = 'Dis my header'
  return header;
}

document.body.appendChild(headerParallax());
