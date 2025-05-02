import './style.css';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function initializeWebsite() {
  // Load home page by default
  loadHome();

  // Add event listeners for tab switching
  document.getElementById('home').addEventListener('click', loadHome);
  document.getElementById('menu').addEventListener('click', loadMenu);
  document.getElementById('contact').addEventListener('click', loadContact);

  // Highlight active tab
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

initializeWebsite();
