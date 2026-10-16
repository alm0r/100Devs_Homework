// *Variables*
// Create a variable and console log the value
let randomVariable = "dog";

console.log(randomVariable);

// Create a variable, add 10 to it, and alert the value

let addTen = 5;
alert(addTen + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}

// Create a function that divides one number by another and returns the remainder

function findRemainder(n1, n2) {
  return n1 % n2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function condiAddsTwo(n1, n2) {
  if (n1 + n2 > 50) {
    alert("JUMANJU");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree(n1, n2, n3) {
  if ((n1 * n2 * n3) % 3 == 0) {
    alert("ZEBRA");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word, i);
  }
}
