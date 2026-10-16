// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = "water ";

console.log(favDrink);
console.log(favDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let sentence = "An apple a day keeps the doctor away";

const checkForApples = sentence.toLocaleLowerCase().includes("apple");

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps() {
  let randomNumber = Math.floor(Math.random() * 100);
  // console.log(randomNumber);
  if (randomNumber < 33) {
    return "rock";
  } else if (randomNumber < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playGame(playerRps) {
  let botChoice = rps();
  let playerChoice = playerRps.toLocaleLowerCase();
  console.log(` Bot picked ${botChoice}`);
  console.log(` You picked ${playerChoice}`);
  if (playerChoice === "rock" && botChoice === "paper") {
    console.log(`The bot chose ${botChoice} and beats your ${playerChoice}`);
  } else if (playerChoice === "rock" && botChoice === "scissors") {
    console.log(`Your ${playerChoice} beats the bot's ${botChoice}`);
  } else if (playerChoice === "paper" && botChoice === "rock") {
    console.log(`Your ${playerChoice} beats the bot's ${botChoice}`);
  } else if (playerChoice === "paper" && botChoice === "scissors") {
    console.log(`The bot chose ${botChoice} and beats your ${playerChoice}`);
  } else if (playerChoice === "scissors" && botChoice === "rock") {
    console.log(`The bot chose ${botChoice} and beats your ${playerChoice}`);
  } else if (playerChoice === "scissors" && botChoice === "paper") {
    console.log(`Your ${playerChoice} beats the bot's ${botChoice}`);
  } else if (playerChoice === botChoice) {
    console.log("Again!");
  } else {
    console.log(` ${playerChoice} is not a valid input, try again`);
  }
  console.log("");
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is
// the number of choices in the array. Print the results of each game to the console.

let posibilities = ["rock", "rock", "rock", "paper", "scissors"];

function playXtimes(choices) {
  choices.forEach((e) => playGame(e));
}
