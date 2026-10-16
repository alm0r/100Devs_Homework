//--- Easy
//create a variable and assign it a number
let number = 25;
//minus 10 from that number
number -= 10;
//print that number to the console

//--- Medium
//create a variable that holds a value from the input

let inputValue = Number(document.querySelector("#danceDanceRevolution").value);

//add 25 to that number
inputValue += 25;

//alert that number
// alert(inputValue);

//--- Hard
//create a variable that holds the h1

const h1Value = document.getElementById("h1Header");

//add an event listener to that element that console logs the sum of the two previous variables

h1Value.addEventListener("click", sum);

function sum() {
  console.log(number + inputValue);
}
