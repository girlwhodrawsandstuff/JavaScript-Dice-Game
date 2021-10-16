const CORRECT_CHOICE_SELECTED_MESSAGE = "Your choice was correct!";
const WRONG_CHOICE_SELECTED_MESSAGE = "Your choice was wrong!";
const NO_CHOICE_SELECTED_MESSAGE = "You haven't guessed this round";

function renderTimer(time) {
  document.getElementById("timer").textContent = time;
}

function renderDice(diceValue) {
  const diceImage = "images/dice-" + diceValue + ".png";
  document.querySelector("img").setAttribute("src", diceImage);
}

function renderOutcome(outcomeString) {
  document.getElementById("outcome").textContent = outcomeString;
}

function renderGuessedValue(guessedValue) {
  document.getElementById("guessed-number").textContent = "Guess: " + guessedValue;
}

function renderScore(score) {
  console.log(score);
  document.getElementById("score").textContent = "Score: " + score;
}

const seconds = 5;
let guessedNumber = 0;
let score = 0;

function handleButtonClick(element) {
  guessedNumber = element.value;
  renderGuessedValue(guessedNumber);
}

function startTimer(seconds) {
  let counter = setInterval(timer, 1000);

  function timer() {
    renderTimer(seconds);

    if (seconds === 0) {
      clearInterval(counter);
      startTimer(5);

      const diceValue = Math.floor(Math.random() * 6) + 1;
      renderDice(diceValue);

      if (guessedNumber === diceValue) {
        score += 1;
        renderScore(score);
        renderOutcome(CORRECT_CHOICE_SELECTED_MESSAGE);
        guessedNumber = 0;
      } else if (guessedNumber != diceValue && guessedNumber != 0) {
        renderOutcome(WRONG_CHOICE_SELECTED_MESSAGE);
        guessedNumber = 0;
      } else {
        renderOutcome(NO_CHOICE_SELECTED_MESSAGE);
      }
    }

    seconds--;
  }
}

startTimer(seconds);
