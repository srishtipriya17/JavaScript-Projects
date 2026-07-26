// Get the button
let changeColorButton = document.getElementById("changeColor");

// Get the paragraph
let colorName = document.getElementById("colorName");

// Create an array of colors
let colors = [
"red",
"blue",
"green",
"yellow",
"pink",
"purple",
"orange"
];

// Add click event to button
changeColorButton.addEventListener("click", function() {


// Generate a random number
let randomNumber = Math.floor(Math.random() * colors.length);

// Get a random color from the array
let randomColor = colors[randomNumber];

// Change the background color
document.body.style.backgroundColor = randomColor;

// Display the color name
colorName.textContent = "Color: " + randomColor;


});
