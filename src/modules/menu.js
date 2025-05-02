export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuTitle.style.color = '#c9a227';
    menuTitle.style.marginBottom = '2rem';
    menuTitle.style.textAlign = 'center';

    menuSection.appendChild(menuTitle);

    const courses = [
      {
        name: 'Tasting Menu',
        items: [
          { name: 'Amuse-Bouche', description: 'Seasonal bite to awaken the palate', price: 'AED 20' },
          { name: 'Foie Gras', description: 'Seared with rhubarb compote and brioche', price: 'AED 38' },
          { name: 'Turbot', description: 'Poached with champagne sauce and caviar', price: 'AED 48' },
          { name: 'Wagyu Beef', description: 'A5 grade with truffle jus and heirloom vegetables', price: 'AED 68' },
          { name: 'Dessert', description: 'Chocolate soufflé with vanilla bean ice cream', price: 'AED 18' }
        ]
      },
      {
        name: 'À La Carte',
        items: [
          { name: 'Scallops', description: 'Seared with cauliflower purée and black truffle', price: 'AED 42' },
          { name: 'Risotto', description: 'Wild mushroom with parmesan foam', price: 'AED 38' },
          { name: 'Lobster', description: 'Thermidor style with cognac cream', price: 'AED 58' },
          { name: 'Venison', description: 'Roasted with juniper berries and red wine reduction', price: 'AED 52' }
        ]
      }
    ];

    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course');

      const courseName = document.createElement('h2');
      courseName.textContent = course.name;
      courseName.style.margin = '2rem 0 1rem';
      courseName.style.color = '#c9a227';

      courseDiv.appendChild(courseName);

      const itemsList = document.createElement('ul');
      course.items.forEach(item => {
        const itemLi = document.createElement('li');
        itemLi.style.listStyle = 'none';
        itemLi.style.margin = '1rem 0';
        itemLi.style.paddingBottom = '0.5rem';
        itemLi.style.borderBottom = '1px solid #333';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.style.marginBottom = '0.5rem';

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        itemDesc.style.color = '#aaa';
        itemDesc.style.fontSize = '0.9rem';

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.style.textAlign = 'right';
        itemPrice.style.marginTop = '0.5rem';

        itemLi.appendChild(itemName);
        itemLi.appendChild(itemDesc);
        if (item.price) itemLi.appendChild(itemPrice);
        itemsList.appendChild(itemLi);
      });

      courseDiv.appendChild(itemsList);
      menuSection.appendChild(courseDiv);
    });

    content.appendChild(menuSection);
  }
