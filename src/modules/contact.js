export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactTitle.style.color = '#c9a227';
    contactTitle.style.marginBottom = '2rem';
    contactTitle.style.textAlign = 'center';

    const contactInfo = document.createElement('div');
    contactInfo.style.display = 'grid';
    contactInfo.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    contactInfo.style.gap = '2rem';
    contactInfo.style.marginTop = '2rem';

    const address = document.createElement('div');
    address.innerHTML = `
      <h2 style="color: #c9a227; margin-bottom: 1rem;">Address</h2>
      <p>123 Gourmet Avenue</p>
      <p>Candor District</p>
      <p>Metropolis, MP 12345</p>
    `;

    const hours = document.createElement('div');
    hours.innerHTML = `
      <h2 style="color: #c9a227; margin-bottom: 1rem;">Hours</h2>
      <p><strong>Dinner:</strong> Tuesday - Sunday, 6pm - 11pm</p>
      <p><strong>Brunch:</strong> Sunday, 11am - 3pm</p>
      <p>Closed Mondays</p>
    `;

    const reservations = document.createElement('div');
    reservations.innerHTML = `
      <h2 style="color: #c9a227; margin-bottom: 1rem;">Reservations</h2>
      <p><strong>Phone:</strong> (555) 123-4567</p>
      <p><strong>Email:</strong> reservations@yoli.com</p>
      <p>Reservations recommended 4-6 weeks in advance</p>
    `;

    contactInfo.appendChild(address);
    contactInfo.appendChild(hours);
    contactInfo.appendChild(reservations);

    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactInfo);
    content.appendChild(contactSection);
  }
