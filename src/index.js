import homePage from './home';
import ourServices from './services';
import restMenu from './menu';
import reserve from './reserve';
import '../dist/assets/css/styles.css';
import Logo from '../dist/assets/images/logo.png';

const container = document.getElementById('content');
container.className = 'w-100 bg-back cont';
const navELement = () => {
  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  nav.classList.add('navbar', 'navbar-light', 'bg-dark', 'd-flex', 'flex-row', 'justify-content-between', 'fixed-top');

  container.appendChild(nav);

  const navLeft = document.createElement('div');

  const logo = document.createElement('img');
  logo.className = ('logo');
  logo.src = Logo;

  navLeft.appendChild(logo);

  const brand = document.createElement('a');
  brand.id = 'nav-brand';
  brand.classList.add('navbar-brand', 'text-light', 'custom-font-a', 'ml-2', 'medium-font');
  brand.innerHTML = "El's Kitchen";
  brand.onclick = () => { homePage(); };
  navLeft.appendChild(brand);

  nav.appendChild(navLeft);

  const navRight = document.createElement('div');

  const linkClass = 'custom-font-b navbar-brand text-white';

  const ourServicesLink = document.createElement('a');
  ourServicesLink.id = 'our-services';
  ourServicesLink.className = linkClass;
  ourServicesLink.innerHTML = 'OUR SERVICES';
  ourServicesLink.onclick = () => { ourServices(); };

  navRight.appendChild(ourServicesLink);

  const menuLink = document.createElement('a');
  menuLink.id = 'menu';
  menuLink.className = linkClass;
  menuLink.innerHTML = 'MENU';
  menuLink.onclick = () => { restMenu(); };

  navRight.appendChild(menuLink);

  const reserveLink = document.createElement('a');
  reserveLink.id = 'reservations';
  reserveLink.className = linkClass;
  reserveLink.innerHTML = 'RESERVATIONS';
  reserveLink.onclick = () => { reserve(); };

  navRight.appendChild(reserveLink);

  nav.appendChild(navRight);
};

const homeContainer = () => {
  const introContainer = document.createElement('div');
  introContainer.id = 'intro';
  introContainer.className = 'container p-5 text-center';
  introContainer.style.height = '500px';
  container.appendChild(introContainer);
};

const render = () => {
  navELement();
  homeContainer();
  homePage();
};

window.onload = () => {
  render();
};