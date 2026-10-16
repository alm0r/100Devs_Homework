//Create an array of movie titles. Loop through the array and each element to the h2.
// let movies = ["movie1", "movie2", "movie3"];

// function movieArray() {
//   for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
//     document.querySelector("h2").innerHTML += movies[i] + "<br>";
//   }
// }

// movieArray();
//Create an array of numbers. Loop through the array and three to each number and replace the old number.

// let numbers = [10, 20, 30];

// console.log("testing", numbers);

// function add3() {
//   numbers.forEach((item, i) => (numbers[i] = item + 3));
//   console.log(numbers);
// }

// add3();
// Find the average of all the numbers from question three

// function avgArr() {
//   let averageSum = 0;

//   numbers.forEach((item, i) => (averageSum = averageSum + item));

//   averageSum = averageSum / numbers.length;
//   console.log(averageSum);
// }

// avgArr();

// function secondTry() {
//   let medianSum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     medianSum = medianSum + numbers[i];
//   }
//   medianSum = medianSum / numbers.length;
//   console.log(medianSum);
// }

// secondTry();

// const calcAge3 = (birthyear) => 2037 - birthyear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);

//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntillRetirement(1990, "Jonas"));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);

// let scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log("nobody wins");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

let movies = ["starwars", "starstrek", "starship"];

function apeendToDom() {
  movies.forEach((movie, i) => (document.querySelector("h2").innerHTML += movie + "<br>"));
}

apeendToDom();

let numbersArr = [1, 5, 7];

function addThree() {
  numbersArr.forEach((n, i) => (numbersArr[i] += 3));
}

function findAverage() {
  let sumOfElements = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sumOfElements += numbersArr[i];
  }
  console.log(sumOfElements);
  let average = sumOfElements / numbersArr.length;
}
