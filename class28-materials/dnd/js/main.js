//Example fetch using DnD5eAPI - place subclasses in ul
// document.querySelector("button").addEventListener("click", getFetch);

// function getFetch() {
//   const choice = document.querySelector("input").value;
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       document.querySelector("h3").innerText = " ";
//       document.querySelector("ul").innerText = " ";
//       console.log(data.classes);

//       data.classes.forEach((x, i) => (document.querySelector("h3").innerText += " " + x.name));
//       console.log(data.subclasses);
//       data.subclasses.forEach((element) => {
//         console.log(element.name);
//         const li = document.createElement("li");
//         li.innerText = element.name;
//         document.querySelector("ul").appendChild(li);
//       });
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

console.log("working");

document.querySelector("button").addEventListener("click", getFetch);

async function getFetch() {
  // console.log("clicked button");
  const choice = document.querySelector("input").value;
  // console.log(choice);
  const url = `https://www.dnd5eapi.co/api/2014/spells/${choice}`;
  // console.log(url);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("could not fetch resource");
    }
    const data = await res.json();
    console.log(data);
    document.querySelector("h2").innerText = data.name;
    data.classes.forEach((element) => {
      document.querySelector("h4").innerText += ` ${element.name}`;
    });
    // for (let i = 0; i < data.classes.length; i++) {
    //   document.querySelector("h4").innerHTML += `<br><br>${data.classes[i].name}`;
    // }
  } catch (err) {
    console.error(`error ${err}`);
  }
}
