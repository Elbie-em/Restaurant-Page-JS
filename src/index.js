const container = document.getElementById('content');

const navELement = () => {
  
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

  const menuLink = document.createElement('a');
  menuLink.id = 'menu';
  menuLink.className = linkClass;
  menuLink.innerHTML = 'MENU';

  navRight.appendChild(menuLink);

  const reserveLink = document.createElement('a');
  reserveLink.id = 'reservations';
  reserveLink.className = linkClass;
  reserveLink.innerHTML = 'RESERVATIONS';

  navRight.appendChild(reserveLink);

  nav.appendChild(navRight);

}

const homeContainer = () => {
  const introContainer = document.createElement('div');
  introContainer.id = 'intro';
  introContainer.className = 'container mt-3 p-5 text-center';
  introContainer.style.height = '500px';

  const logo = document.createElement('img');
  logo.src = './dist/assets/images/logo.png';
  logo.className = 'heading-logo'
  introContainer.appendChild(logo);

  const heading = document.createElement('h1');
  heading.className = 'custom-font-a text-white big-font'
  heading.innerHTML = "Welcome to El's Kitchen"

  introContainer.appendChild(heading);

  const missionStat = document.createElement('p');
  missionStat.className = 'custom-font-b text-white medium-font';
  missionStat.innerHTML = `We imagine a world where there’s no such thing as a bad meal from our highly trained chefs,all our customers leave happily.<br> We Serve Londons best cuisine!`;

  introContainer.appendChild(missionStat);

  const reserveButton = document.createElement('button');
  reserveButton.id = 'reserve-btn';
  reserveButton.className = "btn btn-secondary text-white custom-font-b"
  reserveButton.innerHTML = 'Make Your Reservation';

  introContainer.appendChild(reserveButton);

  container.appendChild(introContainer);

};



const render = () => {
  navELement();
  homeContainer();
}


window.onload = () => {
  render();
};