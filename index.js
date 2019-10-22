var Logger = require('./singleton/Logger');
var Shopper = require('./singleton/Shopper');
var Store = require('./singleton/Store');

var logger = new Logger().getInstance();

logger.log('Starting config...');

var alex = new Shopper('alex', 500);
var ski_shop = new Store('Steep and Deep Supplies', [
  { item:'Downhill Skis', qty: 5, price: 750 },
  { item:'Knit Hat', qty: 20, price: 5 },
]);

logger.log('Finished config...');

console.log(`${logger.count} logs total`);

logger.logs.map(log => console.log(`${log.message}`));
