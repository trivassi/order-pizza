function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

Pizza.prototype.addSize = function () {
  price = 6;
  if (this.size === "small") {
    price += 0
  } else if (this.size === "medium") {
    price += 2
  } else if (this.size === "large") {
    price += 4
  }

};

Pizza.prototype.addTopping = function () {
  
};
