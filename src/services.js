const ourServices = () => {
  const introContainer = document.getElementById('intro');
  introContainer.innerHTML = '';
  introContainer.className = 'bg-white op text-center p-3'
  introContainer.style.height = '600px';

  const heading = document.createElement('h1');
  heading.className = 'custom-font-b text-dark';
  heading.innerHTML = 'OUR SERVICES';

  introContainer.appendChild(heading);

  const description = document.createElement('p');
  description.className = 'custom-font-b text-dark medium-font';
  description.innerHTML = `We earned one star in the Michelin Guide in our first year, and earned two soon thereafter.<br> We earned three Michelin stars in 2007, which we have maintained since.`;

  introContainer.appendChild(description);

  const serviceIcons = document.createElement('div');
  serviceIcons.className = 'container d-flex flex-row justify-content-between p-5';

  const bf_div = document.createElement('div');
  bf_div.className = 'd-flex flex-column';

  const coffeeIcon = document.createElement('img');
  coffeeIcon.className = 'service-icon';
  coffeeIcon.src = 'https://pngriver.com/wp-content/uploads/2018/04/Download-Coffee-Logo-PNG-Transparent-Image.png'

  const b_desc = document.createElement('p');
  b_desc.className = 'custom-font-b'
  b_desc.innerHTML = 'We serve the best english breakfast <br> with the finest coffee imported from colombia. <br> Enjoy your coffee with the best creamers from around the world';

  const b_head = document.createElement('h2');
  b_head.className = 'custom-font-b text-dark mt-3'
  b_head.innerHTML = 'BREAKFAST';

  bf_div.appendChild(coffeeIcon);
  bf_div.appendChild(b_head);
  bf_div.appendChild(b_desc);
  serviceIcons.appendChild(bf_div);

  const lh_div = document.createElement('div');
  lh_div.className = 'd-flex flex-column';

  const lunch_desc = document.createElement('p');
  lunch_desc.className = 'custom-font-b'
  lunch_desc.innerHTML = 'We serve the best cuisines for lunch <br> with the finest ingredients  imported from different places. <br> Enjoy your lunch with us cooked by the worlds finest.';

  const lh_head = document.createElement('h2');
  lh_head.className = 'custom-font-b text-dark mt-3'
  lh_head.innerHTML = 'LUNCH';

  const lunchIcon = document.createElement('img');
  lunchIcon.className = 'service-icon';
  lunchIcon.src = 'https://library.kissclipart.com/20180902/lue/kissclipart-lunch-clipart-lunch-cafe-portslade-aldridge-commun-3f5fdb7ea800b8a5.png';

  lh_div.appendChild(lunchIcon);
  lh_div.appendChild(lh_head);
  lh_div.appendChild(lunch_desc);
  serviceIcons.appendChild(lh_div);

  const dn_div = document.createElement('div');
  dn_div.className = 'd-flex flex-column';

  const dinnerIcon = document.createElement('img');
  dinnerIcon.className = 'service-icon';
  dinnerIcon.src = 'https://cdn4.iconfinder.com/data/icons/food-and-drinks-2/154/wine-food-restoran-eat-breakfast-hotel-512.png';

  const dn_head = document.createElement('h2');
  dn_head.className = 'custom-font-b text-dark mt-3'
  dn_head.innerHTML = 'DINNER';

  const dn_desc = document.createElement('p');
  dn_desc.className = 'custom-font-b'
  dn_desc.innerHTML = 'We serve the best cuisines for dinner <br> with the finest wines old imported from different italy. <br> Enjoy your dinner with us cooked by the worlds finest.';
  
  dn_div.appendChild(dinnerIcon);
  dn_div.appendChild(dn_head);
  dn_div.appendChild(dn_desc);
  serviceIcons.appendChild(dn_div);

  introContainer.appendChild(serviceIcons);


}

export default ourServices;