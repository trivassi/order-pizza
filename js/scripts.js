//back-end
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calcPrice = function () {
  price = 0;

  if (this.size === "small") {
    price += 6;
  } else if (this.size === "medium") {
    price += 8;
  } else if (this.size === "large") {
    price += 10;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    price +=1;
  }

  return price;
}
//front-end
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputSize = $("#size-select").val();

    var inputTopping = $('.topping-option:checkbox:checked').map(function() {
      return this.value;
    }).get();


    console.log(inputSize +" "+ inputTopping);

    var pizzaOrder = new Pizza(inputSize, inputTopping);


  });
});
