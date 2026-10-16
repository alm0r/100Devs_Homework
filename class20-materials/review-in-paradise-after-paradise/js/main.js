// Create a function that takes in an array.
// If the first number is less than the last number, alert "Hi".
// If the first number is greater than the last number, alert "Bye".
//  If they are equal, alert "We close in an hour".

let numbersArray = [1, 7, 9, 12, 1];

function checkNumbers(arr) {
  let firstNumber = arr[0];
  let lastNumber = arr[arr.length - 1];
  console.log(firstNumber, lastNumber);
  if (firstNumber < lastNumber) {
    alert("HI");
  } else if (firstNumber > lastNumber) {
    alert("Bye");
  } else if (firstNumber === lastNumber) {
    alert("We lose in an hour");
  }
}

// console.log("working");
// let nums = [10, 20, 30, 40, 50];

// function numArray(arrayToPass) {
//   let lasElement = arrayToPass[arrayToPass.length - 1];
//   console.log(lasElement);
//   if (arrayToPass[0] < lasElement) {
//     alert("HI");
//   } else if (arrayToPass[0] > lasElement) {
//     alert("Bye");
//   } else if (arrayToPass[0] === lasElement) {
//     alert("We close in an hour");
//   }
// }

// numArray(nums);
