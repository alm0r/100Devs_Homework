document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();
  if (day === "tuesday" || day === "thursday") {
    alert("Its class day");
  } else if (
    day === "saturday".toLowerCase() ||
    day === "sunday".toLowerCase()
  ) {
    alert("Weekend!");
  } else {
    alert("Booringg");
  }
}
