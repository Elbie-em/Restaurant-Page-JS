import clearContainer from './global'

const reserve = () => {
  const introContainer = document.getElementById('intro');
  clearContainer(introContainer,'container text-center p-5 mt-c','500px');

  const heading = document.createElement('h3');
  heading.className = 'custom-font-b text-white pt-5'
  heading.innerHTML = "MAKE YOUR RESERVATION WITH US"

  introContainer.appendChild(heading);

  const subHeading = document.createElement('h1');
  subHeading.className = 'custom-font-b text-white big-font p-5'
  subHeading.innerHTML = "CONTACTS AND SOCIAL LINKS"

  introContainer.appendChild(subHeading);

  const contactsCont = document.createElement('div');
  contactsCont.className = 'd-flex flex-column text-white custom-font-b text-left mx-auto';
  contactsCont.style.width = '280px';

  const fb = document.createElement('h3');
  fb.innerHTML = `<i class="fab fa-facebook-square"></i> Like us on Facbook`;

  const insta = document.createElement('h3');
  insta.innerHTML = `<i class="fab fa-instagram"></i> Follow us on Instagram`;

  const twi = document.createElement('h3');
  twi.innerHTML = `<i class="fab fa-twitter"></i> Follow us Twitter`;

  const call = document.createElement('h3');
  call.innerHTML = `<i class="fas fa-mobile-alt mr-2"></i> 518-576-2137`;

  contactsCont.appendChild(call);
  contactsCont.appendChild(fb);
  contactsCont.appendChild(insta);
  contactsCont.appendChild(twi);
  

  introContainer.appendChild(contactsCont);

}

export default reserve;