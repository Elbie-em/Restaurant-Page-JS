const restMenu = () => {
  const head = document.createElement('div');
  head.className = 'menu-head mb-3 p-5';

  const heading = document.createElement('h1');
  heading.className = 'text-white custom-font-a';
  heading.innerHTML = 'OUR MENU';

  const text = document.createElement('p');
  text.className = 'custom-font-b text-white'
  text.innerHTML = "With a love for great food and innovation - we’ve always got something exciting to offer. From immersive wine tastings to blind folded dinners to disco brunches – we’ll make sure you don’t leave disappointed or hungry."

  head.appendChild(heading);
  head.appendChild(text);
  
  const introContainer = document.getElementById('intro');
  introContainer.innerHTML = '';
  introContainer.className = 'mt-3 p-5 text-center';

  introContainer.appendChild(head);

  const menuGrid = document.createElement('div');
  menuGrid.className = 'menu-grid container';

  const menu = [{
    name: 'Grilled Lobster',
    thumbnail: 'https://www.wallpaperup.com/uploads/wallpapers/2014/11/16/518153/ad167c1c7716f7cbae97e8d83a6ceeed-700.jpg',
    description: 'Prepared on medium-high gas or charcoal grill fire.',
    price:'$126'
  },{
    name: 'Chicken parmesan',
    thumbnail: 'https://thecozyapron.com/wp-content/uploads/2019/03/chicken-parmesan_thecozyapron_1.jpg',
    description: 'Crispy, saucy and cheesy, this chicken parmesan has loads of garlic-y flavor.',
    price:'$178'
  },{
    name: 'Lasagna',
    thumbnail: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg',
    description: 'The Best Classic Lasagna Recipe - Homemade lasagna full of pasta, ricott.',
    price:'$178'
  },{
    name: 'Molten lava cakes',
    thumbnail: 'https://www.theflavorbender.com/wp-content/uploads/2019/01/Molten-Lava-Cake-The-Flavor-Bender-Featured2.jpg',
    description: 'These molten lava cakes are ready in under 30 minutes.',
    price:'$56'
  },{
    name: 'Blackened Redfish',
    thumbnail: 'https://barbecuebible.com/wp-content/uploads/2019/08/jims-redfish-on-half-shell-01-1024x640.jpg',
    description: 'The dish starts with a blend of spices including cayenne, paprika, garlic and onion powders.',
    price:'$200'
  },{
    name: 'Canlis Salad',
    thumbnail: 'https://static01.nyt.com/images/2020/05/28/travel/28chefrecipes-canlis-trv-inyt/merlin_172383222_2b3af82e-1e9f-4b86-8666-573f940add39-articleLarge.jpg',
    description: 'Canlis, a longtime Seattle institution, floats high above Lake Union.',
    price:'$108'
  },{
    name: 'Charbroiled Oysters',
    thumbnail: 'https://img1.10bestmedia.com/Images/Photos/359789/chef-rusty-s-chargrilled-oysters--3-_54_990x660.jpg',
    description: 'Gulf oysters from Louisiana are some of the plumpest and tastiest in the country, and they’re insanely plentiful.',
    price:'$79'
  },{
    name: 'BAR-B-Q Chicken',
    thumbnail: 'https://i.ytimg.com/vi/URISH_rImK8/maxresdefault.jpg',
    description: 'A homemade hickory smoked BBQ sauce is brushed over chicken drumsticks and grilled to perfection.',
    price:'$118'
  },{
    name: 'Potato Gnocchi',
    thumbnail: 'https://onebitevegan.com/wp-content/uploads/2017/10/Gnocchi_Marinara.jpg',
    description: 'Recipe for fresh made, no-egg, vegan potato gnocchi that is easy to make.',
    price:'$72'
  },,{
    name: 'Prime Rib',
    thumbnail: 'https://www.simplyrecipes.com/wp-content/uploads/2014/12/prime-rib-horiz-a-1600.jpg',
    description: 'Prime rib is available in five sizes and includes salad, mashed potatoes, Yorkshire pudding and whipped cream horseradish.',
    price:'$179'
  },,{
    name: 'Stone Crab Claws',
    thumbnail: 'https://www.seriouseats.com/recipes/images/20110405-entertaining-stonecrabmustard-primary.jpg',
    description: 'Cracked crab claws with hash browns, served with a mayo-based mustard sauce.',
    price:'$279'
  },,{
    name: 'Apple Bacon Muscles',
    thumbnail: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2018/12/how-to-cook-mussels-sq-309.jpg',
    description: 'This classic recipe for steamed mussels with white wine is a quick, easy and elegant dinner.',
    price:'$172'
  }];

  menu.map((item) => {
    
    const card = document.createElement('div');
    card.className = 'card mb-3 card-add';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const thumbnail = document.createElement('img');
    thumbnail.src = item.thumbnail;
    thumbnail.className = 'card-img'

    const name = document.createElement('h5');
    name.className = 'card-title custom-font-b'
    name.innerHTML = item.name;

    const desc = document.createElement('p');
    desc.className = 'card-text custom-font-b'
    desc.innerHTML = item.description;

    const price = document.createElement('h6');
    price.className = 'card-subtitle text-success custom-font-b'
    price.innerHTML = item.price;

    cardBody.appendChild(name);
    cardBody.appendChild(desc);
    cardBody.appendChild(price);

    card.appendChild(thumbnail);
    card.appendChild(cardBody);
    menuGrid.appendChild(card);
    introContainer.appendChild(menuGrid);
  }
  );
};

export default restMenu;