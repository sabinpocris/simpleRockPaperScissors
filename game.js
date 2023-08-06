const WIN = 1;
const DRAW = 0;
const LOST = -1;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let gameData = playerSelection + " " + computerSelection;

  if (playerSelection === computerSelection)
    return DRAW;

  switch(gameData) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      return WIN;
    default:
      return LOST;
  }
}

function game() {
  let userScore = 0, computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick between rock, paper, scissors!");
    let computerSelection = getComputerChoice();

    console.log(`Your choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    switch (playRound(playerSelection, computerSelection)) {
      case WIN:
        userScore++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
        break;
      case LOST:
        computerScore++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
        break;
      case DRAW:
        console.log("Is draw!");
        break;
    }

    if (computerScore === 3 || userScore === 3) {
      break;
    }
  }

  if (userScore > computerScore) {
    console.log("You win!");
  } else if (userScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("Is draw!");
  }
}


game();
