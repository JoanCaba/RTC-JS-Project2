const products = [
  {
    name: 'Short Bow',
    price: 15,
    seller: 'Nessa',
    level: 5,
    dps: 16,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/0fcc51afcd/Bow2.png',
  },
  {
    name: 'Imperial Claw',
    price: 25,
    seller: 'Nessa',
    level: 68,
    dps: 72,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png',
  },
  {
    name: 'Pneumatic Dagger',
    price: 23,
    seller: 'Nessa',
    level: 70,
    dps: 69,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0RGFnZ2VyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/d484666b70/HeistDagger.png',
  },
  {
    name: 'Blunt Force Condenser',
    price: 35,
    seller: 'Nessa',
    level: 30,
    dps: 59,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSGVpc3RUd29IYW5kTWFjZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ecc9c2724b/HeistTwoHandMace.png',
  },
  {
    name: 'The Hidden Blade',
    price: 120,
    seller: 'Nessa',
    level: 60,
    dps: 83,
    image: './assets/Weapons/TheHiddenBlade.webp',
    unique: true,
  },
  /* Item template
  {
    name: '',
    price: ,
    seller: '',
    level: ,
    dps: ,
    image: '',
  },
  */
  {
    name: 'Blunt Force Condenser',
    price: 30,
    seller: 'Tarkleigh',
    level: 30,
    dps: 59,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSGVpc3RUd29IYW5kTWFjZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ecc9c2724b/HeistTwoHandMace.png',
  },
  {
    name: 'Imperial Claw',
    price: 23,
    seller: 'Tarkleigh',
    level: 68,
    dps: 72,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png',
  },
  {
    name: 'Foundry Bow',
    price: 54,
    seller: 'Tarkleigh',
    level: 50,
    dps: 21,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0hlaXN0Qm93RmlyZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/30526435da/HeistBowFire.png',
  },
  {
    name: 'Void Fangs',
    price: 21,
    seller: 'Tarkleigh',
    level: 70,
    dps: 50,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9IZWlzdENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7ebe8140fa/HeistClaw.png',
  },
  {
    name: 'Blasting Blade	',
    price: 76,
    seller: 'Tarkleigh',
    level: 50,
    dps: 96,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hlaXN0VHdvSGFuZFN3b3JkIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9757ea88b2/HeistTwoHandSword.png',
  },
  {
    name: 'Convoking Wand',
    price: 23,
    seller: 'Tarkleigh',
    level: 72,
    dps: 59,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Db252b2tpbmdXYW5kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/fc10997b84/ConvokingWand.png',
  },
  {
    name: 'Eventuality Rod	',
    price: 89,
    seller: 'Tarkleigh',
    level: 70,
    dps: 138,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png',
  },
  {
    name: 'VoidForge',
    price: 340,
    seller: 'Tarkleigh',
    level: 67,
    dps: 223,
    image: './assets/Weapons/Starforge.webp',
    unique: true,
  },
  {
    name: 'Capacity Rod',
    price: 65,
    seller: 'Lani',
    level: 30,
    dps: 70,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png',
  },
  {
    name: 'Vaal Axe',
    price: 67,
    seller: 'Lani',
    level: 64,
    dps: 159,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlNSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/4b3fbfcd65/TwoHandAxe5.png',
  },
  {
    name: 'Apex Rapier',
    price: 45,
    seller: 'Lani',
    level: 55,
    dps: 67,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1JhcGllcjgiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/1f11ed5e87/Rapier8.png',
  },
  {
    name: 'Eclipse Staff',
    price: 45,
    seller: 'Lani',
    level: 70,
    dps: 129,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/edbdbaa9ba/Staff8.png',
  },
  {
    name: 'Alternating Sceptre',
    price: 70,
    seller: 'Lani',
    level: 70,
    dps: 73,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9IZWlzdFNjZXB0cmVFbGVtZW50YWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/34e5d78ab3/HeistSceptreElemental.png',
  },
  {
    name: 'Convoking Wand',
    price: 28,
    seller: 'Lani',
    level: 72,
    dps: 59,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Db252b2tpbmdXYW5kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/fc10997b84/ConvokingWand.png',
  },
  {
    name: 'Eventuality Rod	',
    price: 69,
    seller: 'Lani',
    level: 70,
    dps: 138,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png',
  },
  {
    name: 'Imperial Claw',
    price: 28,
    seller: 'Lani',
    level: 68,
    dps: 72,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png',
  },
  {
    name: 'Pneumatic Dagger',
    price: 33,
    seller: 'Lani',
    level: 70,
    dps: 69,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0RGFnZ2VyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/d484666b70/HeistDagger.png',
  },
  {
    name: "Rigwald's Savagery",
    price: 234,
    seller: 'Lani',
    level: 67,
    dps: 322,
    image: './assets/Weapons/Savagery.webp',
    unique: true,
  },

  {
    name: 'Siege Axe',
    price: 666,
    seller: 'Utula',
    level: 59,
    dps: 81,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9PbmVIYW5kQXhlMyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/126bb32028/OneHandAxe3.png',
  },
  {
    name: 'Convoking Wand',
    price: 28,
    seller: 'Utula',
    level: 72,
    dps: 59,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Db252b2tpbmdXYW5kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/fc10997b84/ConvokingWand.png',
  },
  {
    name: 'Eventuality Rod	',
    price: 69,
    seller: 'Utula',
    level: 70,
    dps: 138,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVpc3RXYXJTdGFmZiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/c9454891da/HeistWarStaff.png',
  },
  {
    name: 'Imperial Claw',
    price: 28,
    seller: 'Utula',
    level: 68,
    dps: 72,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png',
  },
  {
    name: 'Foundry Bow',
    price: 54,
    seller: 'Utula',
    level: 50,
    dps: 21,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0hlaXN0Qm93RmlyZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/30526435da/HeistBowFire.png',
  },
  {
    name: 'Void Fangs',
    price: 21,
    seller: 'Utula',
    level: 70,
    dps: 50,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9IZWlzdENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7ebe8140fa/HeistClaw.png',
  },
  {
    name: 'Blasting Blade	',
    price: 76,
    seller: 'Utula',
    level: 50,
    dps: 96,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hlaXN0VHdvSGFuZFN3b3JkIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9757ea88b2/HeistTwoHandSword.png',
  },
  {
    name: 'Imperial Claw',
    price: 25,
    seller: 'Utula',
    level: 68,
    dps: 72,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/9efad90cdb/Claw7.png',
  },
  {
    name: 'Pneumatic Dagger',
    price: 23,
    seller: 'Utula',
    level: 70,
    dps: 69,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlaXN0RGFnZ2VyIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/d484666b70/HeistDagger.png',
  },
  {
    name: 'Blunt Force Condenser',
    price: 35,
    seller: 'Utula',
    level: 30,
    dps: 59,
    image: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSGVpc3RUd29IYW5kTWFjZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ecc9c2724b/HeistTwoHandMace.png',
  },
  {
    name: 'Varunastra',
    price: 65,
    seller: 'Utula',
    level: 64,
    dps: 324,
    image: './assets/Weapons/Varunastra.webp',
    unique: true,
  },
];
const sellers = [
  {
    name: 'Nessa',
    location: "Lioneye's Watch",
    image: './assets/NPCs/Nessa.png',
  },
  {
    name: 'Tarkleigh',
    location: "Lioneye's Watch",
    image: './assets/NPCs/Tarkleigh.png',
  },
  {
    name: 'Lani',
    location: "Overseer's Tower",
    image: './assets/NPCs/Lani.png',
  },
  {
    name: 'Utula',
    location: "Overseer's Tower",
    image: './assets/NPCs/Utula.png',
  },
];

const filtersSection = document.querySelector('#filters');
const productsSection = document.querySelector('#products');

const getProductCardTemplate = (product) => {
  return `<div class="${product.unique ? 'product-card product-card-unique' : 'product-card'}">
  <img src="${product.image}"/>
  <h3>${product.name}</h3>
  <span>Level: ${product.level}</span>
  <span>DPS: ${product.dps}</span>
  <span>Price: ${product.price}</span>
  <span>Seller: ${product.seller}</span>
  </div>`;
};

const createFilterOption = (optionName, type) => {
  const option = document.createElement("option");
  option.value = type + "-" + optionName;
  option.text = optionName;
  return option;
};
const createOptgroup = (labelName) => {
  const optGroup = document.createElement("optgroup");
  optGroup.label = labelName;
  return optGroup;
};
const onOptionChanged = (input) => {
  const filterSellers = document.querySelector('#filter-sellers');
  const filterUniques = document.querySelector('#filter-uniques');
  const sellerToFilter = filterSellers.value.split('-')[1];
  const sellerToFilterType = filterSellers.value.split('-')[0];
  const filterUniquesStatus = filterUniques.value.split('-')[1];
  const filterUniquesType = filterUniques.value.split('-')[0];
  let productsFiltered = [];
  productsFiltered = products;
  if (!(sellerToFilterType === "Default")) {
    const filterSellersFiltered = products.filter((products) => products.seller.toLowerCase().includes(sellerToFilter.toLowerCase()));
    productsFiltered = filterSellersFiltered;
  }
  if (!(filterUniquesType === "Default")) {
    if (filterUniquesStatus === 'true') {
      productsFiltered = productsFiltered.filter((products) => products.unique);
    } else {
      productsFiltered = productsFiltered.filter((products) => !products.unique);
    }
  }
  updateProductsSection(productsFiltered)





  /*   const type = input.target.value.split('-')[0];
    const optionName = input.target.value.split('-')[1];
    if (type === 'sellers') {
      const productsFiltered = products.filter((products) => products.seller.toLowerCase().includes(optionName.toLowerCase()));
      updateProductsSection(productsFiltered);
    } */

};
const createSellerFilterSelect = (type, options, optgroups) => {
  const filterBox = document.createElement("div")
  const filterLabel = document.createElement("label");
  filterLabel.htmlFor = "filter-" + type;
  filterBox.appendChild(filterLabel);
  const filterSelect = document.createElement("select");
  filterSelect.addEventListener('change', onOptionChanged);
  filterSelect.id = "filter-" + type;
  filterBox.appendChild(filterSelect);
  const filterDefaultOption = createFilterOption(`All ${type}`, "Default");
  filterSelect.appendChild(filterDefaultOption)
  if (optgroups) {
    for (optgroup of optgroups) {
      const optgroupElement = createOptgroup(optgroup);
      filterSelect.appendChild(optgroupElement);
    }
  }
  filtersSection.appendChild(filterBox);

  for (option of options) {
    const filterOption = createFilterOption(option.optionName, type);
    if (optgroups && optgroups.includes(option.optgroupName)) {
      const optgroupSelector = document.querySelector('optgroup[label="' + option.optgroupName + '"]');
      optgroupSelector.appendChild(filterOption);
    } else {
      filterSelect.appendChild(filterOption);
    }
  }
  return filterBox;
};

const onButtonClearClicked = () => {
  //TODO: Reset products list ->>> function to reset?
  return
};

const onInputPriceFilterChanged = () => {
  //TODO: Filter by price
  return
};

const filterByProductName = (word, products) => {
  const result = products.filter((products) => products.name.toLowerCase().includes(word.toLowerCase()));
  return result;

};

const updateProductsSection = (products) => {
  productsSection.innerHTML = [];
  for (product of products) {
    productsSection.innerHTML += getProductCardTemplate(product);
  };
};
console.log(filterByProductName("Bow", products))


/* for (product of products) {
  productsSection.innerHTML += getProductCardTemplate(product);
}; */

const sellersLocations = [... new Set(sellers.map(seller => seller.location))];
const sellersOptionsGroups = sellers.map(seller => ({ optionName: seller.name, optgroupName: seller.location }));
createSellerFilterSelect("sellers", sellersOptionsGroups, sellersLocations);
createSellerFilterSelect("uniques", [{ optionName: true }, { optionName: false }]);
/*
let locations = [];
for (seller of sellers) {
  if (locations.includes(seller.location)) {
    const optGroup = document.querySelector('optgroup[label="' + seller.location + '"]');
    const option = filterOption(seller.name);
    optGroup.appendChild(option);
  } else {
    const optGroup = createOptgroup(seller.location);
    filterSelect.appendChild(optGroup);
    const option = filterOption(seller.name);
    optGroup.appendChild(option);
    locations.push(seller.location);
  }
};


/*


      <label for="filter-sellers">Filter</label>
      <select name="" id="filter-sellers"></select>


      <label for="filter-price"></label>
      <input type="number" id="filter-price">
      <button>limpiar</button>


*/

updateProductsSection(products);