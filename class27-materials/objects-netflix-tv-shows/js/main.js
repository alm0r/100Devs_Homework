//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow {
  constructor(title, director, genre, year) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
  }

  start() {
    console.log(`show begins`);
  }

  pause() {
    console.log("show is paused");
  }

  finish() {
    console.log("show ends");
  }
}

let knightOftheSeven = new MakeNetflixShow("knightoftheseven", "david Finoli", "fantsay", 2026);

function rollDice() {
  setTimeout(() => {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled ${result}`);
  }, 1000);
}

rollDice(function (number) {
  console.log("You rolled:", number);
});

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
}
