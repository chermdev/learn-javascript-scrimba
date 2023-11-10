// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Per",
    chips: 200
}

function getRandomCardValue() {
    return Math.floor(Math.random() * 13) + 1
}

function getRandomCard() {
    let newCardValue = getRandomCardValue()
    cards.push(newCardValue)
}

function sumCards() {
    sum = 0
    for (let i = 0; i < cards.length; i += 1) {
        sum += cards[i]
    }
}
function resetValues() {
    cards = []
    sum = 0
    hasBlackJack = false
    isAlive = true
    message = ""
}

function renderCards() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardLetter = cards[i]
        if (cardLetter === 1) {
            cardLetter = "A"
        } else if (cardLetter === 11) {
            cardLetter = "J"
        } else if (cardLetter === 12) {
            cardLetter = "Q"
        } else if (cardLetter === 3) {
            cardLetter = "K"

        }
        cardsEl.textContent += cardLetter + " "
    }
}

function renderSum() {
    sumCards()
    sumEl.textContent = "Sum: " + sum
}

function renderMessage() {
    let message = ""
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function renderPlayer() {
    playerEl.textContent = player.name + ": $" + player.chips
}

function renderGame() {
    renderCards()
    renderSum()
    renderMessage()
    renderPlayer()
}

function startGame() {
    resetValues()
    getRandomCard()
    getRandomCard()
    renderGame()
}


function newCard() {
    getRandomCard()
    renderGame()
}