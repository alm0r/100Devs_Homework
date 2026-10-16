//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let pokemonParty = ["Staryu", "Starmie", "Psyduck"];

const reverseOrder = (array) => array.reverse();

console.log(reverseOrder(pokemonParty));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let arrayA = [2, 3];
let arrayB = [3, 4];

function arrayMath(a, b) {
  let arrayAValue = a.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
  let arrayBvalue = b.reduce((acc, cur) => acc + Math.pow(cur, 3), 0);
  return arrayAValue > arrayBvalue ? true : false;
}

arrayMath(arrayA, arrayB);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % i == 0 ? newArray.push(array[i]) : false;
  }
  console.log(newArray);
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let mulitArray = ["5", "5", 10];

function refactorArray(array) {
  return array.reduce((acc, c) => acc + Number(c), 0);
}

console.log(refactorArray(mulitArray));
