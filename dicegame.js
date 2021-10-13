function playGame() {
    let randomNumber = Math.floor(Math.random()*6) + 1
    let diceNumber = "images/dice-" + randomNumber + ".png"

    let image = document.querySelector("img")
    image.setAttribute("src", diceNumber)
}