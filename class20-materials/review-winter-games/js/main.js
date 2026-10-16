//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function takeNumArray(array) {
//   let evenNums = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       // console.log(array[i]);
//       evenNums.push(array[i]);
//     }
//   }
//   return evenNums;
// }

// function takeNumArray2(array) {
//   let evenNums = [];
//   array.forEach((element) => {
//     if (element % 2 == 0) {
//       // console.log(element);
//       evenNums.push(element);
//     }
//   });
//   return evenNums;
// }

// let bestNumbers = takeNumArray(numbers);
// let secondBestNumbers = takeNumArray2(numbers);

// console.log(
//   ` the selected numbers are ${bestNumbers} and ${secondBestNumbers}`
// );

// console.log("working");

// function calcTip2(bill) {
//   for (let i = 0; i < bill.length; i++) {
//     console.log(i, bill[i]);
//     bill[i] += 10;
//     console.log(i, bill[i]);
//   }
//   return bill;
// }

// let newBills = calcTip2(bills);
// console.log(` the new bills are ${newBills}`);

// function calcTip3(bill) {
//   let updatedBills = [];
//   for (let i = 0; i < bill.length; i++) {
//     updatedBills.push(bill[i] + 10);
//   }
//   return updatedBills;
// }

// let newArray = calcTip3(bills);
// console.log(` the new bills are ${newArray}`);

// let bills = [125, 555, 44];
// let tips = calcTip(125);

// function calcTip(bill) {
//   let tips = [];
//   for (let i = 0; i < bill.length; i++) {
//     if (bill[i] >= 50 && bill[i] <= 300) {
//       let tip = bill[i] * 0.15;
//       console.log(tip);
//       tips.push(tip);
//     } else {
//       let tip = bill[i] * 0.2;
//       console.log(tip);
//       tips.push(tip);
//     }
//   }
//   return tips;
// }

// let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips);

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     let tip = bill * 0.15;
//     console.log(tip);
//     return tip;
//   } else {
//     let tip = bill * 0.15;
//     console.log(tip);
//     return tip;
//   }
// }

// console.log(tips);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const calcTip2 = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(totals);

// console.log("working");

// const jonas = {
//   firstName: "Jonas",
//   lastname: "Jonas",
//   birthyear: 1991,
//   calcAge: function () {
//     this.age = 2037 - this.birthyear;
//     return this.age;
//   },
// };
// console.log(jonas);
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas);

// const mark = {
//   fullName: "mark",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "john",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI());
// console.log(mark.bmi);

// console.log(john.calcBMI());
// console.log(john.bmi);

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// let biggerBMI =
//   john.bmi > mark.bmi
//     ? console.log(
//         `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}!`
//       )
//     : console.log(
//         `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}!`
//       );

// console.log(biggerBMI);

//Create a function that takes in an array of numbers.
// Return a new array containing every even number from the original array (do not use map or filter)

let numbersArray = [1, 3, 6, 9, 12, 14];

// function returnNumbers(arr) {
//   let evenNumbers = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   console.log(evenNumbers);
// }

function returnNumbers(arr) {
  let evenNumbers = [];
  arr.forEach((e) => {
    if (e % 2 === 0) {
      evenNumbers.push(e);
    }
  });
  console.log(evenNumbers);
}
