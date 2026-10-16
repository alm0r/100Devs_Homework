//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let age = 12;

if (age < 16) {
  console.log("u cant drive");
} else if (age < 18) {
  console.log("cant enter the club");
} else if (age < 21) {
  console.log("cant drink");
} else if (age < 25) {
  console.log("cant rent cars affordably");
} else if (age < 30) {
  console.log("cant rent fancy cars");
} else {
  console.log("life is over");
}

document.querySelector("#h1Header").addEventListener("click", checkAge);

function checkAge() {
  let inputAge = document.querySelector("#danceDanceRevolution").value;
  age = inputAge;
  console.log("working");
  if (age < 16) {
    console.log("u cant drive");
  } else if (age < 18) {
    console.log("cant enter the club");
  } else if (age < 21) {
    console.log("cant drink");
  } else if (age < 25) {
    console.log("cant rent cars affordably");
  } else if (age < 30) {
    console.log("cant rent fancy cars");
  } else {
    console.log("life is over");
  }
}
