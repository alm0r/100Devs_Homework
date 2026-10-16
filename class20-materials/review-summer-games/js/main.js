//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
// let numbers = [1, 2, 3, 4, 5];

// function arrayIteration(array) {
//   let currentValue = 1;
//   // array.ForEach(element => currentValue *= element)
//   for (let i = 0; i < array.length; i++) {
//     currentValue = currentValue * array[i];
//     console.log(i, currentValue);
//   }
//   alert(currentValue);
// }

// arrayIteration(numbers);

//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

let numbersArray = [1, 4, 5, 6];
let totalProduct = 1;

// function mulitplyEach(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     totalProduct = totalProduct * arr[i];
//   }
//   console.log(totalProduct);
// }

numbersArray.forEach((x, i) => (totalProduct = totalProduct * x));
