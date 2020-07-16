const restMenu = () => {
  const introContainer = document.getElementById('intro');
  introContainer.innerHTML = '';
  introContainer.className = 'container mt-3 p-5 text-center';
  introContainer.style.height = '500px';
}

export default restMenu;