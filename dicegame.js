let guessedNumber

function clickedButton(element) {
    guessedNumber = element.value
    // console.log(guessedNumber)
}

let timeValue = 5
let score

function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        let timeCount = document.getElementById("timer")
        timeCount.textContent = time
        time--;

        if(time < 0) {
            clearInterval(counter);
            startTimer(10)
            let randomNumber = Math.floor(Math.random()*6) + 1
            let diceNumber = "images/dice-" + randomNumber + ".png"
            let image = document.querySelector("img")
            image.setAttribute("src", diceNumber)
            if(guessedNumber == randomNumber) {
                score += 1
                console.log(score)
            }
        }
    } 
}

startTimer(timeValue)