// const cardsDeck = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

// let deckId = "";

// function shuffleDeck() {
//   fetch(cardsDeck)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data);
//       deckId = data.deck_id;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

// document.querySelector("button").addEventListener("click", drawTwo);

// function drawTwo() {
//   // const choice = document.querySelector("input").value.toLowerCase();
//   const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data);

//       let player1Card = convertToNum(data.cards[0].value);
//       let player2Card = convertToNum(data.cards[1].value);

//       document.querySelector("#player-1-card-value").innerText = `Your card is a ${player1Card}`;
//       document.querySelector("#player-1").src = data.cards[0].image;
//       document.querySelector("#player-2-card-value").innerText = `Your card is a ${player1Card}`;
//       document.querySelector("#player-2").src = data.cards[1].image;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

// function convertToNum(val) {
//   if (val === "ACE") {
//     return 14;
//   } else if (val === "KING") {
//     return 13;
//   } else if (val === "QUEEN") {
//     return 12;
//   } else if (val === "JACK") {
//     return 11;
//   } else {
//     return Number(val);
//   }
// }

// shuffleDeck();

let deckID = "";
let player1score = 0;
let player2score = 0;
//////////////////////////////////////////////////////////
document.querySelector("#getNewDeck").addEventListener("click", getNewDeck);

function getNewDeck() {
  // const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log("new deck added");
      console.log(data.deck_id);
      deckID = data.deck_id;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
/////////////////////////////////////////////////////////////////
document.getElementById("drawCards").addEventListener("click", drawCards);

function drawCards() {
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2 `;
  console.log(url);
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log(data.cards[0].value);
      console.log(data.cards[1].value);

      let player1Card = parseCard(data.cards[0].value);
      let player2Card = parseCard(data.cards[1].value);

      document.getElementById("cardsLeft").innerText = data.remaining;

      document.getElementById("player1card").innerText = `Player 1 card is a ${player1Card}`;
      document.getElementById("player1img").src = data.cards[0].image;
      document.getElementById("player2card").innerText = `Player 2 card is a ${player2Card}`;
      document.getElementById("player2img").src = data.cards[1].image;

      if (player1Card > player2Card) {
        player1score += 1;
      } else if (player2Card > player1Card) {
        player2score += 1;
      } else if (player1Card === player2Card) {
        console.log(`there are ${data.remaining} cards left`);
        console.log("war");
        handleWar(player1Card, player2Card).then(() => {
          document.getElementById("player1score").innerText = `Player 1 score is ${player1score}`;
          document.getElementById("player2score").innerText = `Player 2 score is ${player2score}`;
        });
        return; // Prevent updating scores below until war is done
      }

      document.getElementById("player1score").innerText = `Player 1 score is ${player1score}`;
      document.getElementById("player2score").innerText = `Player 2 score is ${player2score}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
//////////////////////////////////////////////////////////////////////

function parseCard(card) {
  if (card === "ACE") {
    return 14;
  } else if (card === "KING") {
    return 13;
  } else if (card === "QUEEN") {
    return 12;
  } else if (card === "JACK") {
    return 11;
  } else {
    return Number(card);
  }
}

async function handleWar(p1War, p2War) {
  while (p1War === p2War) {
    // Check if enough cards for war
    const checkRes = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/`);
    const checkData = await checkRes.json();
    if (checkData.remaining < 8) {
      console.log("Not enough cards for war");
      const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=8`);
      // Maybe declare a winner or something, but for now, break
      break;
    }
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=8`);
    const data = await res.json();
    console.log(data);
    document.getElementById("cardsLeft").innerText = data.remaining;
    p1War = parseCard(data.cards.slice(-2)[0].value);
    p2War = parseCard(data.cards.slice(-1)[0].value);

    console.log(p1War);
    console.log(p2War);

    document.getElementById("player1card").innerText = `Player 1 card is a ${p1War}`;
    document.getElementById("player1img").src = data.cards.slice(-2)[0].image;
    document.getElementById("player2card").innerText = `Player 2 card is a ${p2War}`;
    document.getElementById("player2img").src = data.cards.slice(-1)[0].image;

    if (p1War > p2War) {
      player1score += 4;
    } else if (p2War > p1War) {
      player2score += 4;
    }
  }
}
