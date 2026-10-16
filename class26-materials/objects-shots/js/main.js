//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// let nOfClick = 0;
// document.querySelector("button").addEventListener("click", getDrink);
// function getDrink() {
//   let userCocktail = document.querySelector("input").value.toLowerCase();
//   // console.log(nOfClick);
//   // console.log(userCocktail);
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userCocktail}`)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data.drinks);
//       document.querySelector("h2").innerText = data.drinks[nOfClick].strDrink;
//       document.querySelector("img").src = data.drinks[nOfClick].strDrinkThumb;
//       document.querySelector("h3").innerText = data.drinks[nOfClick].strInstructions;
//       console.log(nOfClick);
//       nOfClick += 1;
//       if (data.drinks[nOfClick] === data.drinks[data.drinks.length]) {
//         nOfClick = 0;
//       }
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  console.log("working");
  console.log(document.querySelector("input").value.toLowerCase());

  let userDrink = document.querySelector("input").value.toLowerCase();

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userDrink}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks[0]);

      // Name
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      // Picture
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      // Instruction
      document.querySelector("h3").innerHTML = data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
