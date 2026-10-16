// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let sentence = "dog";

const findQuestion = (word) => (word.slice(-1) === "?" ? alert(sentence) : console.log(sentence));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let longText = " find the word jr. dev in this text and replace it";

const promoted = (word) => word.replace("jr. dev", "software engineer");

console.log(promoted(longText));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
