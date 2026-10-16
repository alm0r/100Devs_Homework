//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// document.getElementById("help").addEventListener("click", stopSnacking);

// function stopSnacking() {
//   let nSnacks = Number(document.getElementById("numberofsnacks").value);
//   document.getElementById("stops").innerText = "";
//   console.log(nSnacks);
//   for (let i = 1; i <= nSnacks; i++) {
//     document.getElementById("stops").innerText += " STOP";
//   }
// }

document.querySelector("#help").addEventListener("click", stopSnacking);

function stopSnacking() {
  let snacks = document.querySelector("#numberofsnacks").value;
  console.log(snacks);
  document.querySelector("#stops").innerText = "";
  for (let i = 1; i <= snacks; i++) {
    document.querySelector("#stops").innerText += " STOP SNACKING";
  }
}
