
const navELement = () => {
  let container = document.getElementById('content');

  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  nav.classList.add('navbar', 'navbar-light', 'bg-dark','d-flex','flex-row','justify-content-between');

  container.appendChild(nav);

  const navLeft = document.createElement('div');

  const logo = document.createElement('img');
  logo.className = ('logo');
  logo.src = './dist/assets/images/logo.png';

  navLeft.appendChild(logo);

  const brand = document.createElement('a');
  brand.id = 'nav-brand';
  brand.classList.add('navbar-brand','text-light', 'custom-font-a', 'ml-2');
  brand.innerHTML = "El's Kitchen";
  
  navLeft.appendChild(brand);

  nav.appendChild(navLeft);

  const navRight = document.createElement('div');

  const linkClass = 'custom-font-b navbar-brand text-white'
  
  const ourServicesLink = document.createElement('a');
  ourServicesLink.id = 'our-services';
  ourServicesLink.className = linkClass;
  ourServicesLink.innerHTML = 'OUR SERVICES';

  navRight.appendChild(ourServicesLink);

  const specialsLink = document.createElement('a');
  specialsLink.id = 'specials';
  specialsLink.className = linkClass;
  specialsLink.innerHTML = 'SPECIALS';

  navRight.appendChild(specialsLink);

  const reserveLink = document.createElement('a');
  reserveLink.id = 'reservations';
  reserveLink.className = linkClass;
  reserveLink.innerHTML = 'RESERVATIONS';

  navRight.appendChild(reserveLink);

  nav.appendChild(navRight);

}


const render = () => {
  navELement();
}


window.onload = () => {
  render();
};