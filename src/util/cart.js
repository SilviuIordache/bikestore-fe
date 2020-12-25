class Cart{
  constructor() {
    this.cartKey = 'cart-items';
    this.storage = localStorage;
  }

  addItem(item) {
    let items = JSON.parse(this.storage.getItem(this.cartKey));
    if (items) {
      let itemInCart = false;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === item.id) {
          itemInCart = true;
          items[i].amount++;
        }
      }
      if (!itemInCart) {
        items.push(item)
      }
    } else {
      items = [];
      items.push(item)
    }
    this.storage.setItem(this.cartKey, JSON.stringify(items));
  }

  removeItem(id) {
    let items = JSON.parse(this.storage.getItem(this.cartKey));

    const confirm = window.confirm(`Delete product this product from your shopping cart?`);
    if (confirm) {
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            items.splice(i, 1);
            this.storage.setItem(this.cartKey, JSON.stringify(items));
          }
        }
      }
    }
  }

  updateItem(id, value) {
    let items = JSON.parse(this.storage.getItem(this.cartKey));
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].amount = value;
        this.storage.setItem(this.cartKey, JSON.stringify(items));
      }
    }
  }

  getItems() {
    let items = JSON.parse(this.storage.getItem(this.cartKey));
    return items;
  }

  getItemsNumber() {
    let items = JSON.parse(this.storage.getItem(this.cartKey));
    let total = 0;
    items.forEach((item) => {
      total += item.amount;
    })
    return total;
  }
}

const cart = new Cart();
export default cart;