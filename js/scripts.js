
function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.chooseSize = function () {
  this.price = 0;

  if (this.size === "small") {
    this.price += 6;
  } else if (this.size === "medium") {
    this.price += 8;
  } else if (this.size === "large") {
    this.price += 10;
  }

return this.price;
}

Pizza.prototype.addToppings = function () {
  var tprice = 0;
for (var i = 0; i < toppings.length; i++) {
  var tprice = price +=1;
}
return tprice;
}
