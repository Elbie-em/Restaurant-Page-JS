import clearContainer from './global';

const ourServices = () => {
  const introContainer = document.getElementById('intro');
  clearContainer(introContainer, 'bg-white op text-center p-3 mt-c', '600px');

  const heading = document.createElement('h1');
  heading.className = 'custom-font-b text-dark';
  heading.innerHTML = 'OUR SERVICES';

  introContainer.appendChild(heading);

  const description = document.createElement('p');
  description.className = 'custom-font-b text-dark medium-font';
  description.innerHTML = 'We earned one star in the Michelin Guide in our first year, and earned two soon thereafter.<br> We earned three Michelin stars in 2007, which we have maintained since.';

  introContainer.appendChild(description);

  const serviceIcons = document.createElement('div');
  serviceIcons.className = 'container d-flex flex-row justify-content-between p-5';

  const bfDiv = document.createElement('div');
  bfDiv.className = 'd-flex flex-column';

  const coffeeIcon = document.createElement('img');
  coffeeIcon.className = 'service-icon';
  coffeeIcon.src = 'https://pngriver.com/wp-content/uploads/2018/04/Download-Coffee-Logo-PNG-Transparent-Image.png';

  const bDesc = document.createElement('p');
  bDesc.className = 'custom-font-b';
  bDesc.innerHTML = 'We serve the best english breakfast <br> with the finest coffee imported from colombia. <br> Enjoy your coffee with the best creamers from around the world';

  const bHead = document.createElement('h2');
  bHead.className = 'custom-font-b text-dark mt-3';
  bHead.innerHTML = 'BREAKFAST';

  bfDiv.appendChild(coffeeIcon);
  bfDiv.appendChild(bHead);
  bfDiv.appendChild(bDesc);
  serviceIcons.appendChild(bfDiv);

  const lhDiv = document.createElement('div');
  lhDiv.className = 'd-flex flex-column';

  const lunchDesc = document.createElement('p');
  lunchDesc.className = 'custom-font-b';
  lunchDesc.innerHTML = 'We serve the best cuisines for lunch <br> with the finest ingredients  imported from different places. <br> Enjoy your lunch with us cooked by the worlds finest.';

  const lhHead = document.createElement('h2');
  lhHead.className = 'custom-font-b text-dark mt-3';
  lhHead.innerHTML = 'LUNCH';

  const lunchIcon = document.createElement('img');
  lunchIcon.className = 'service-icon';
  lunchIcon.src = 'https://library.kissclipart.com/20180902/lue/kissclipart-lunch-clipart-lunch-cafe-portslade-aldridge-commun-3f5fdb7ea800b8a5.png';

  lhDiv.appendChild(lunchIcon);
  lhDiv.appendChild(lhHead);
  lhDiv.appendChild(lunchDesc);
  serviceIcons.appendChild(lhDiv);

  const dnDiv = document.createElement('div');
  dnDiv.className = 'd-flex flex-column';

  const dinnerIcon = document.createElement('img');
  dinnerIcon.className = 'service-icon';
  dinnerIcon.src = 'https://cdn4.iconfinder.com/data/icons/food-and-drinks-2/154/wine-food-restoran-eat-breakfast-hotel-512.png';

  const dnHead = document.createElement('h2');
  dnHead.className = 'custom-font-b text-dark mt-3';
  dnHead.innerHTML = 'DINNER';

  const dnDesc = document.createElement('p');
  dnDesc.className = 'custom-font-b';
  dnDesc.innerHTML = 'We serve the best cuisines for dinner <br> with the finest wines old imported from different italy. <br> Enjoy your dinner with us cooked by the worlds finest.';

  dnDiv.appendChild(dinnerIcon);
  dnDiv.appendChild(dnHead);
  dnDiv.appendChild(dnDesc);
  serviceIcons.appendChild(dnDiv);

  introContainer.appendChild(serviceIcons);
};

export default ourServices;