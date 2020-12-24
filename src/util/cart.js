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

    const confirm = window.confirm(`Delete product ${id} from your shopping cart?`);
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

  getItems() {
    let items = JSON.parse(this.storage.getItem(this.cartKey));
    return items;
  }
}

const cart = new Cart();
export default cart;