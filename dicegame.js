function clickedButton(element) {
    console.log(element.value)
}

setInterval(() => {
    let randomNumber = Math.floor(Math.random()*6) + 1
    let diceNumber = "images/dice-" + randomNumber + ".png"

    let image = document.querySelector("img")
    image.setAttribute("src", diceNumber)
}, 5000)