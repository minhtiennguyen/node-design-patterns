var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem('Leather Boots', 79.99);
var sneakers = new CatalogItem('Kicks', 39.99);
var flipFlops = new CatalogItem('California work boots', 19.99);

var group_shoes = new CatalogGroup('Shoes and such', [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup('Food for while you try on clothes', [
  new CatalogItem('Potato Chips', 1.99),
  new CatalogItem('Hamburger', 3.99)
]);

var keychain = new CatalogItem('Keychain', 2.99);

var catalog = new CatalogGroup('Clothes and Food', [group_shoes, group_food, keychain]);

console.log('catalof total: ', `$${catalog.total}`);
catalog.print();

// console.log('boots total: ', `$${boots.total}`);
// console.log('shoes total: ', `$${group_shoes.total}`);

// boots.print();
// sneakers.print();
// group_shoes.print();