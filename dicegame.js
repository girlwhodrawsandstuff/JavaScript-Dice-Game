let guessedNumber

function clickedButton(element) {
    guessedNumber = element.value
    // console.log(guessedNumber)
}

let timeValue = 5
let score = 0

function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        let timeCount = document.getElementById("timer")
        timeCount.textContent = time
        time--;

        if(time < 0) {
            clearInterval(counter);
            startTimer(5)
            let randomNumber = Math.floor(Math.random()*6) + 1
            let diceNumber = "images/dice-" + randomNumber + ".png"
            let image = document.querySelector("img")
            image.setAttribute("src", diceNumber)
            if(guessedNumber == randomNumber) {
                score += 1
                console.log(score)
                let finalScore = document.getElementById("score")
                finalScore.textContent = "Score: " + score
                let outcome = document.getElementById("outcome")
                outcome.textContent = "Your choice was correct!"
            } else {
                let outcome = document.getElementById("outcome")
                outcome.textContent = "Your choice was wrong!"
            }
        }
    } 
}

startTimer(timeValue)