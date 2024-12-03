const humanChoiceButtons = Array.from(
  document.getElementsByClassName("human-choice-button")
);
const resultsOutcomePara = document.getElementById("result-outcome");
const computerScorePara = document.getElementById("computer-score");
const humanScorePara = document.getElementById("human-score");

let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

const choices = ["rock", "paper", "scissors"];

humanChoiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (roundCount < 4) {
      playRound(btn.dataset.choiceType);
    } else {
      startNewGame();
    }
  });
});

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter: rock, paper, or scissors");
  return humanChoice.toLocaleLowerCase();
}

function updateScore(resultsOutcome) {
  resultsOutcomePara.innerText = resultsOutcome;
  computerScorePara.innerText = `computer: ${computerScore}`;
  humanScorePara.innerText = `human: ${humanScore}`;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultsOutcome;

  if (humanChoice === computerChoice) {
    resultsOutcome = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    ++computerScore;
    resultsOutcome = `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    ++humanScore;
    resultsOutcome = `You win! ${humanChoice} beats ${computerChoice}`;
  }
  updateScore(resultsOutcome);
  ++roundCount;
}

function hideButton(btn) {
  btn.style.display = "none";
}
function showButton(btn) {
  btn.style.display = "block";
}

function startNewGame() {
  resultsOutcomePara.innerHTML = `Game over! ${
    humanScore > computerScore ? "human wins!" : "computer wins!"
  }`;
  humanChoiceButtons.forEach((btn) => {
    hideButton(btn);
  });
  const startNewGameBtn = document.getElementById("start-new-game");
  startNewGameBtn.style.display = "block";
  startNewGameBtn.addEventListener("click", () => {
    hideButton(startNewGameBtn);
    humanChoiceButtons.forEach((btn) => {
      showButton(btn);
    });
    restartGame();
  });
}

function restartGame() {
  computerScore = 0;
  humanScore = 0;
  roundCount = 0;
  updateScore("");
}
