// Get the count element from HTML
let countElement = document.getElementById("count");

// Get the buttons from HTML
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let increaseButton = document.getElementById("increase");

// Create a variable to store the count
let count = 0;

// Increase button
increaseButton.addEventListener("click", function() {


count = count + 1;

countElement.textContent = count;


});

// Decrease button
decreaseButton.addEventListener("click", function() {


count = count - 1;

countElement.textContent = count;


});

// Reset button
resetButton.addEventListener("click", function() {


count = 0;

countElement.textContent = count;


});
