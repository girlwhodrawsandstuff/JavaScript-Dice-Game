function clickedButton(element) {
    console.log(element.value)
}

let timeValue = 10

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
        }
    } 
}

startTimer(10)