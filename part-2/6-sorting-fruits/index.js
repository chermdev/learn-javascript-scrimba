let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let fruitsEl = document.getElementById("fruits-el")
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

fruitsEl.textContent += fruits

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruits.length; i++) {
        fruit = fruits[i]
        if (fruit === "🍎") {
            appleShelf.textContent += fruit
        } else if (fruit === "🍊") {
            orangeShelf.textContent += fruit
        }
    }
}