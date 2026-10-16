//Example fetch using pokemonapi.co
// document.querySelector("button").addEventListener("click", getFetch);
// document.querySelector("h4").innerHTML = localStorage.getItem("books");

// function getFetch() {
//   const ibanNumber = document.querySelector("input").value;
//   const url = `https://openlibrary.org/isbn/${ibanNumber}.json`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data.title);
//       if (!localStorage.getItem("books")) {
//         localStorage.setItem("books", data.title);
//       } else {
//         let books = localStorage.getItem("books") + ":" + data.title;
//         localStorage.setItem("books", books);
//       }
//       document.querySelector("h4").innerHTML = localStorage.getItem("books");
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }
console.log("working");

document.querySelector("button").addEventListener("click", getFetch);

async function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);

  try {
    const res = await fetch(`https://openlibrary.org/isbn/${choice}.json`);

    if (!res.ok) {
      throw new Error("could not fetch res");
    }

    const data = await res.json();
    console.log(data.title);
    document.querySelector("h3").innerHTML = `${data.title}`;
  } catch (err) {
    console.error(`error ${err}`);
  }
}
