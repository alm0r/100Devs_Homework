//Write your pseduo code first!
let originalTemp = document.querySelector(".farTemp").value;

document.querySelector(".convertSmurf").addEventListener("click", convertTemperature);

function convertTemperature() {
  let newTemp = (Number(originalTemp) * 9) / 5 + 32;
  document.querySelector(".celTemp").innerText = `${newTemp}`;
  console.log(newTemp);
}

console.log(originalTemp);
