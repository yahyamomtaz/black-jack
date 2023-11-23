let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard]
let age = 21
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: " + cards[0] + "  " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 8
    sum += card
    startGame()
}

if (age < 21) {
    console.log("You can not enter the casino!")
} else if (age >= 21) {
    console.log("Welcome!")
}

if (age < 100) {
    console.log("Not eligible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else if (age > 100) {
    console.log("Not eligible, you have already gotten one")
}
