// Get the display element
let display = document.getElementById("display");


// Add number or operator to display
function addNumber(value) {
    display.value = display.value + value;
}


// Clear the display
function clearDisplay() {
    display.value = "";
}


// Delete the last character
function deleteNumber() {
    display.value = display.value.slice(0, -1);
}


// Calculate the result
function calculate() {

    try {

        let result = eval(display.value);

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}