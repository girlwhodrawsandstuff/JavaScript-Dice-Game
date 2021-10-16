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


let timeValue = 5;
let score = 0;

function startTimer(time) {
    let counter = setInterval(timer, 1000);
    function timer() {
        let timeCount = document.getElementById("timer");
        timeCount.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);
            startTimer(5);
            let randomNumber = Math.floor(Math.random()*6) + 1;
            let diceNumber = "images/dice-" + randomNumber + ".png";
            let image = document.querySelector("img");
            image.setAttribute("src", diceNumber);

            if(guessedNumber == randomNumber) {
                score += 1;
                console.log(score);
                let finalScore = document.getElementById("score");
                finalScore.textContent = SCORE + score;
                let outcome = document.getElementById("outcome");
                outcome.textContent = CORRECT_CHOICE_SELECTED_MESSAGE;
                guessedNumber = 0;
            } else if(guessedNumber != randomNumber && guessedNumber != 0) {
                let outcome = document.getElementById("outcome");
                outcome.textContent = WRONG_CHOICE_SELECTED_MESSAGE;
                guessedNumber = 0;
            } else {
                let outcome = document.getElementById("outcome");
                outcome.textContent = NO_CHOICE_SELECTED_MESSAGE;
            }
        }
    } 
}

startTimer(timeValue);