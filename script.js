// Function to compute simple interest
function compute() {
    // Get the value of the principal input field
    var principal = document.getElementById("principal").value;

    // Validate the principal input
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Get the value of the rate input field
    var rate = document.getElementById("rate").value;

    // Get the value of the years input field
    var years = document.getElementById("years").value;

    // Calculate the interest
    var interest = (principal * years * rate) / 100;

    // Calculate the future year
    var year = new Date().getFullYear() + parseInt(years);

    // Get the reference to the result element and set its innerHTML
    document.getElementById("result").innerHTML = 
        "If you deposit <span class='highlight'>" + principal + "</span>,<br>" +
        "at an interest rate of <span class='highlight'>" + rate + "%</span>.<br>" +
        "You will receive an amount of <span class='highlight'>" + interest + "</span>,<br>" +
        "in the year <span class='highlight'>" + year + "</span>.<br>";
}

// Function to update the displayed rate value dynamically
function updateRate() {
    // Get the current value of the range slider
    var rateval = document.getElementById("rate").value;
    
    // Update the adjacent span to display the value as a percentage
    document.getElementById("rate_val").innerText = rateval + "%";
}
