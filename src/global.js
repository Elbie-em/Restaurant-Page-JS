
const clearContainer = (container,className, height) => {
  container.innerHTML = '';
  container.className = className;
  container.style.height = height;
};

export default clearContainer;