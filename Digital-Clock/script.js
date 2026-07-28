function updateClock() {

    // Get current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert 24-hour format to 12-hour format
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add 0 before single digit numbers
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Create the time
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;

    // Show time on the webpage
    document.getElementById("clock").textContent = time;

    // Get today's date
    const date = now.toDateString();

    // Show date on the webpage
    document.getElementById("date").textContent = date;
}

// Run the function every 1 second
setInterval(updateClock, 1000);

// Run the function immediately
updateClock();