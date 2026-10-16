// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "Christmas";

favHoliday = favHoliday.toUpperCase();

console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let randomString = "house";

alert(randomString.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function takesFive(n1, n2, n3, n4, n5) {
  alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5));
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function findHighLow(n1, n2, n3) {
  let solution = [];
  solution.push(Math.min(n1, n2, n3));
  solution.push(Math.max(n1, n2, n3));
  console.log(solution);
}

findHighLow(1, 3, 4);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip() {
  let random = Math.floor(Math.random() * 100);
  if (random % 2 == 0) {
    console.log(random);
    console.log("Heads");
  } else if (random % 2 !== 0) {
    console.log(random);
    console.log("Tails");
  }
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function throwCoin(n) {
  for (let i = 1; i <= n; i++) {
    coinFlip();
  }
}
