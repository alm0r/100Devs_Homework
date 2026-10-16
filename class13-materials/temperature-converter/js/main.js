document.querySelector("#convert").addEventListener("click", convert);

function convert() {
  console.log("working");
  let celsiusTemp = document.querySelector("#CelsiusTemp").value;
  celsiusTemp = (celsiusTemp * 9) / 5 + 32;
  // celsiusTemp = String(celsiusTemp);

  document.getElementById("FahrenheitTemp").innerText = celsiusTemp;
}
