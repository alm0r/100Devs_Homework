//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

// let numArray = [1, 2, 3, 4, -1, 6, 7];

// function sumArrayelements(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   console.log(total);
// }

// sumArrayelements(numArray);

// let sumAll = numArray.reduce(sumatorio, 0);

// function sumatorio(total, num) {
//   return total + num;
// }

// console.log(sumAll);

// let sumAll = numArray.reduce((total, num) => {
//   return total + num;
// }, 0);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// let squared = numArray.map((element) => element ** 2);

// let squared2 = function (arr) {
//   return arr.map((element) => element ** 2);
// };
// console.log(squared);
// console.log(squared2(numArray));
//Create a function that takes string
//Print the reverse of that string to the console

//USING METHODS
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  // let splitString = str.split("");
  // console.log(splitString);
  // Step 2. Use the reverse() method to reverse the new created array
  // let reverseArray = splitString.reverse();
  // console.log(reverseArray);
  // Step 3. Use the join() method to join all elements of the array into a string
  // let joinArray = reverseArray.join("");
  //Step 4. Return the reversed string
  // return joinArray;
}

////Same but cleaner
// function reverseString(str) {
// return str.split("").reverse().join("");
// }

////USING FOR LOOPS
// function reverseString(str) {
// Step 1. Create an empty string that will host the new created string
// let newString = "";

// Step 2. Create the FOR loop
/* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
// for (let i = str.length - 1; i >= 0; i--) {
// newString += str[i];
// console.log(newString);
// }

// Step 3. Return the reversed string
// return newString;
// }

///USING RCURSION
// function reverseString(str) {
//   if (str === "") return "";
//   else return reverseString(str.substr(1)) + str.charAt(0);
// }

//// Cleaner
// function reverseString(str) {
//   return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
// }
// reverseString("hello");

///Logic
// function reverseString(str) {
// if (str === "")
// This is the terminal case that will end the recursion
// return "";
// else return reverseString(str.substr(1)) + str.charAt(0);
/* 
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"                              reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
// }

//Create a function that takes in a string
//Alert if the string is a palindrome or not

// function checkPalindrome(string) {
//   for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] === string[string.length - 1 - i]) {
//       return "its a palindrome";
//     } else {
//       return "its not a palindrome";
//     }
//   }
// }

// function checkPalindromeWithReverseF(string) {
//   let wordReverser = reverseString(string);
//   if (string === wordReverser) {
//     return "its a palindrome";
//   } else {
//     return "its no a palindrome";
//   }
// }

//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numbers = [2, 7, 4, 2];

function sumNumbers(arr) {
  console.log(arr.reduce((acc, cur) => acc + cur));
}

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squared(arr) {
  console.log(arr.map((e) => e ** 2));
}

//Create a function that takes string
//Print the reverse of that string to the console

// function reveredString(word) {
//   let reversedWord = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     console.log(i, word[i]);
//     reversedWord += word[i];
//   }
//   console.log(reversedWord);
// }

function reverser(string) {
  console.log(string.split("").reverse().join(""));
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
