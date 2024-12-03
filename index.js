// const choices = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   const choiceIndex = Math.floor(Math.random() * 3);
//   return choices[choiceIndex];
// }

// function getHumanChoice() {
//   let humanChoice = prompt("Enter: rock, paper, or scissors");
//   return humanChoice.toLocaleLowerCase();
// }

// let computerScore = 0;
// let humanScore = 0;
// let roundCount = 0;

// function playRound() {
//   const computerChoice = getComputerChoice();
//   const humanChoice = getHumanChoice();

//   if (humanChoice === computerChoice) {
//     console.log("It's a tie!");
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     ++computerScore;
//     console.log("You lose! Paper beats rock!");
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     ++computerScore;
//     console.log("You lose! Scissors beats paper!");
//   } else {
//     ++humanScore;
//     console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//   }
//   ++roundCount;
// }

// function playGame() {
//   while (roundCount < 5) {
//     playRound();
//   }
//   console.group("game-over");
//   console.log(
//     `Game over! ${
//       humanScore > computerScore ? "human wins!" : "computer wins!"
//     }`
//   );
//   console.log("---Final scores---");
//   console.log(`Human: ${humanScore}`);
//   console.log(`Computer: ${computerScore}`);
//   console.groupEnd("game-over");
//   startNewGame();
// }

// // playGame();

// function startNewGame() {
//   let startNewGame = prompt("Would you like to play again?");
//   if (startNewGame.toLowerCase() === "yes") {
//     roundCount = 0;
//     computerScore = 0;
//     humanScore = 0;
//     console.log("New game started!");
//     playGame();
//   }
// }
