
function calculateAge() {

    // Get the date entered by the user
    let birthDate = document.getElementById("birthDate").value;

    // Check if user entered a date
    if (birthDate === "") {
        document.getElementById("result").innerText =
            "Please enter your date of birth.";

        return;
    }

    // Convert the entered date into a Date object
    let dob = new Date(birthDate);

    // Get today's date
    let today = new Date();

    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();

    let month = today.getMonth() - dob.getMonth();

    // If birthday hasn't happened yet this year
    if (
        month < 0 ||
        (month === 0 && today.getDate() < dob.getDate())
    ) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerText =
        "You are " + age + " years old.";
}

