// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
// let favFood = "garb";
// favFood = "lom";
// alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// let animal = "zebra";
// alert(animal[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

// function takesThree(num1, num2, num3) {
//   const quickMath = (num1 * num2) / num3;
//   alert(quickMath);
// }

// takesThree(4, 5, 4);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
// function takesOne(num1) {
//   console.log(num1 ** 2);
//   console.log(Math.cbrt(num1));
// }
// takesOne(3);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
// function checkForSummer(month) {
//   if (
//     month.toLowerCase() === "june" ||
//     month.toLowerCase() === "july" ||
//     month.toLowerCase() === "august"
//   ) {
//     alert("YAY1");
//   } else {
//     alert("BOO1");
//   }
// }

// checkForSummer("june");

// function takesMonth(month) {
//   switch (month.toLowerCase()) {
//     case "june":
//     case "july":
//     case "august":
//     case "september":
//       alert("YAY2");
//       break;
//     default:
//       alert("Boo2");
//   }
// }
// takesMonth("june");

// const month = "june";

// const summerMonths = ["june", "july", "august", "september"];
// const summerMonth = summerMonths.includes(month)
//   ? alert("YAY3")
//   : alert("BOO3");
// //*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

// function takesNum(num1) {
//   for (let i = 1; i <= num1; i++) {
//     if (i % 5 !== 0) {
//       console.log(i);
//     }
//   }
// }

// takesNum(12);

let favFood = "pan";

favFood = "arroz";

///////////

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let randomWord = "house";

alert(randomWord.charAt(1));

// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takesThree(n1, n2, n3) {
  alert((n1 / n2) * n3);
}

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(n) {
  console.log(n ** 3);
}

//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function month(month) {
  if (month.toLowerCase() == "june" || month.toLowerCase() == "july" || month.toLowerCase() == "august") {
    alert("JAY");
  } else {
    alert("BOO");
  }
}

//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skippingFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
