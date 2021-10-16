// constants
const CORRECT_CHOICE_SELECTED_MESSAGE = "Your choice was correct!";
const WRONG_CHOICE_SELECTED_MESSAGE = "Your choice was wrong!";
const NO_CHOICE_SELECTED_MESSAGE = "You haven't guessed this round";
const GUESS = "Guess: ";
const SCORE = "Score: ";

let guessedNumber = 0;

function clickedButton(element) {
    guessedNumber = element.value;
    document.getElementById("guessed-number").textContent = GUESS + guessedNumber;
}

// - separate functions, for example updateDiceValue(), renderDice(), renderRoundOutcome(), updateScore(),
// - Store all things related to timer in separate functions


const seconds = 5;
let score = 0;

function renderTimer(time) {
    document.getElementById("timer").textContent = time;
}

function renderDice(diceValue) {
    const diceImage = "images/dice-" + diceValue + ".png";
    document.querySelector("img").setAttribute("src", diceImage);
}

function startTimer(seconds) {
    let counter = setInterval(timer, 1000);
    function timer() {
        renderTimer(seconds);

        if(seconds === 0) {
            clearInterval(counter);
            startTimer(5);

            let diceValue = Math.floor(Math.random()*6) + 1;
            renderDice(diceValue);

            if(guessedNumber == diceValue) {
                score += 1;
                console.log(score);
                let finalScore = document.getElementById("score");
                finalScore.textContent = SCORE + score;
                let outcome = document.getElementById("outcome");
                outcome.textContent = CORRECT_CHOICE_SELECTED_MESSAGE;
                guessedNumber = 0;
            } else if(guessedNumber != diceValue && guessedNumber != 0) {
                let outcome = document.getElementById("outcome");
                outcome.textContent = WRONG_CHOICE_SELECTED_MESSAGE;
                guessedNumber = 0;
            } else {
                let outcome = document.getElementById("outcome");
                outcome.textContent = NO_CHOICE_SELECTED_MESSAGE;
            }
        }

        seconds--;
    } 
}

startTimer(seconds);