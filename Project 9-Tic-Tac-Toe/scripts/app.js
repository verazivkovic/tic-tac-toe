const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
]

let editedPlayer = "0";
let activePlayer = "0";
let currentRound = "1";
let gameIsOver  = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1Element = document.getElementById("edit-player-1-button");
const editPlayer2Element = document.getElementById("edit-player-2-button");
const cancelConfigButtonElement = document.getElementById("cancel-config-button");
const startNewGameButtonElement = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

editPlayer1Element.addEventListener("click", openPlayerConfig);
editPlayer2Element.addEventListener("click", openPlayerConfig);

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameButtonElement.addEventListener("click", startNewGame);

for(const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
