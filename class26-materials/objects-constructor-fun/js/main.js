//Create a constructor with 4 properties and 3 methods

function MakePizza(pizzaSize, pizzaToppings, pizzaCrust, pizzaSauce) {
  this.size = pizzaSize;
  this.toppings = pizzaToppings;
  this.crust = pizzaCrust;
  this.sauce = pizzaSauce;

  MakePizza.estimatedDeliveryTime = function () {
    console.log("calculation");
  };

  MakePizza.burnMouth = function () {
    true;
  };

  MakePizza.frisbee = function () {
    console.log("YEEEEEEEEt");
  };
}
