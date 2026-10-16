//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = [" The Simpsons", "Futurama", "South Park"];

tvShows.forEach((e) => console.log(e));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let numbersArray = [0, 31, -2, 3, 7, 28, 5];

let evenNumbers = (arr) => arr.filter((e) => e % 2 === 0);
console.log(evenNumbers(numbersArray));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

let orderNumbers = (arr) => arr.sort((a, b) => a - b);

console.log(orderNumbers(numbersArray));

console.log(orderNumbers(numbersArray)[1], orderNumbers(numbersArray)[orderNumbers(numbersArray).length - 2]);
