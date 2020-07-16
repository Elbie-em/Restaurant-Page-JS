const restMenu = () => {
  const introContainer = document.getElementById('intro');
  introContainer.innerHTML = '';
  introContainer.className = 'container mt-5 p-5 text-center menu-grid';

  const menu = [{
    name: 'Grilled Lobster',
    thumbnail: 'https://www.wallpaperup.com/uploads/wallpapers/2014/11/16/518153/ad167c1c7716f7cbae97e8d83a6ceeed-700.jpg',
    description: 'Prepared on medium-high gas or charcoal grill fire',
    price:'$126'
  },{
    name: 'Chicken parmesan',
    thumbnail: 'https://www.wallpaperup.com/uploads/wallpapers/2014/11/16/518153/ad167c1c7716f7cbae97e8d83a6ceeed-700.jpg',
    description: 'Prepared on medium-high gas or charcoal grill fire',
    price:'$178'
  },{
    name: 'Grilled Lobster',
    thumbnail: 'https://www.wallpaperup.com/uploads/wallpapers/2014/11/16/518153/ad167c1c7716f7cbae97e8d83a6ceeed-700.jpg',
    description: 'Prepared on medium-high gas or charcoal grill fire',
    price:'$126'
  },{
    name: 'Grilled Lobster',
    thumbnail: 'https://www.wallpaperup.com/uploads/wallpapers/2014/11/16/518153/ad167c1c7716f7cbae97e8d83a6ceeed-700.jpg',
    description: 'Prepared on medium-high gas or charcoal grill fire',
    price:'$126'
  }];

  menu.map((item) => {
    console.log(item);
    const card = document.createElement('div');
    card.className = 'card mb-3 card-add';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const thumbnail = document.createElement('img');
    thumbnail.src = item.thumbnail;
    thumbnail.className = 'card-img-top'

    const name = document.createElement('h5');
    name.className = 'card-title'
    name.innerHTML = item.name;

    const desc = document.createElement('p');
    desc.className = 'card-text'
    desc.innerHTML = item.description;

    const price = document.createElement('h6');
    price.className = 'card-subtitle'
    price.innerHTML = item.price;

    cardBody.appendChild(name);
    cardBody.appendChild(desc);
    cardBody.appendChild(price);

    card.appendChild(thumbnail);
    card.appendChild(cardBody);
    introContainer.appendChild(card);
  }
  );
};

export default restMenu;