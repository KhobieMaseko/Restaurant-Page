export default function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Create hero image section
  const heroImageContainer = document.createElement('div');
  heroImageContainer.classList.add('hero-image-container');

  const heroImage = document.createElement('img');
  heroImage.src = require('../images/pexels-hasan-kurt-154798938-10749578.jpg');
  heroImage.alt = 'Elegant restaurant interior';
  heroImage.classList.add('hero-image');
  heroImageContainer.appendChild(heroImage);

  // Create text content
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const headline = document.createElement('h1');
  headline.textContent = 'Yoli';

  const subhead = document.createElement('h2');
  subhead.textContent = 'Fine Dining Redefined';

  const description = document.createElement('p');
  description.textContent = 'Experience culinary excellence in our intimate setting where every dish tells a story. Our Michelin-starred chefs create unforgettable tasting menus using the finest seasonal ingredients.';

  const reservationBtn = document.createElement('button');
  reservationBtn.textContent = 'Make Reservation';
  reservationBtn.classList.add('reservation-btn');
  reservationBtn.addEventListener('click', () => {
    document.getElementById('contact').click();
  });

  hero.appendChild(headline);
  hero.appendChild(subhead);
  hero.appendChild(description);
  hero.appendChild(reservationBtn);

  // Add elements to DOM
  content.appendChild(heroImageContainer);
  content.appendChild(hero);

  // Add photo credit (only once)
  if (!document.querySelector('.photo-credit')) {
    addPhotoCredit();
  }
}

function addPhotoCredit() {
  const footer = document.createElement('div');
  footer.classList.add('photo-credit');
  footer.innerHTML = `
    Photo by <a href="https://www.pexels.com/photo/white-ceramic-mug-with-coffee-beside-brown-dried-leaf-10749578/" target="_blank" rel="noopener noreferrer">hasan kurt</a>
  `;
  document.body.appendChild(footer);
}
