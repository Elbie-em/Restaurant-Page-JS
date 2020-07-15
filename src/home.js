const homePage = () => {
  const introContainer = document.getElementById('intro');
  introContainer.innerHTML = '';
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
  reserveButton.className = "btn btn-secondary text-white custom-font-b op"
  reserveButton.innerHTML = 'Make Your Reservation';

  introContainer.appendChild(reserveButton);

}

export default homePage;