var Shopper = require('./Shopper');
var {
  InventoryItem,
  GoldInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

var alex = new Shopper('Alex', 4000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GoldInventoryItem(necklace);
var diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);
var gold_walkman = new GoldInventoryItem(walkman);


alex.purchase(diamond_gold_necklace);
alex.purchase(gold_walkman);

alex.printStatus();
diamond_gold_necklace.print();