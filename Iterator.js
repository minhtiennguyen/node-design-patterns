class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  first() {
    var [first] = this.items;
    return first;
  }

  last() {
    var [last] = [...this.items].reverse();
    return last;
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  next() {
    if (this.hasNext()) {
      this.index += 1;
    }
    return this.current();
  }

  current() {
    return this.items[this.index];
  }

  prev() {
    if (this.index !== 0) {
      this.index -= 1;
    }
    return this.current();
  }
}

module.exports = Iterator;
