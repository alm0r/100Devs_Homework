// *Variables*
// Create a variable and console log the value
const animal = "horse";
console.log(animal);

// Create a variable, add 10 to it, and alert the value

let addTen = 9;
addTen += 10;
// alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsFour(num1, num2, num3, num4) {}

// Create a function that divides one number by another and returns the remainder

function dividesTwo(num1, num2) {
  let division = num1 % num2;
  return division;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function Jumanji(num1, num2) {
  if (num1 + num2 > 50) {
    alert("Jumanji");
  } else {
    alert("smaller");
  }
}

Jumanji(15, 40);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree(num1, num2, num3) {
  let result = num1 * num2 * num3;
  if (result % 3 === 0) {
    alert("ZEBRA");
  }
}
