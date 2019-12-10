var Storage = require('./Storage');

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    // this.inventory = inventory;
    var floor = new Storage('store floor', inventory.floor);
    var backRoom = new Storage('store backroom', inventory.backRoom);
    var localStore = new Storage('nearby store', inventory.localStore, 1);
    var warehouse = new Storage('warehouse', inventory.warehouse, 5);

    floor.setNext(backRoom);
    backRoom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName) {
    // var index = this.inventory.map(item => item.name).indexOf(itemName);
    // return this.inventory[index];
    return this.storage.find(itemName);
  }
}

module.exports = Store;
