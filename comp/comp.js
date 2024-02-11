const compliments = [
    "You're amazing!",
    "I appreciate you every day.",
    "Your smile brightens my day.",
    // Add more compliments as needed
];

const complimentContainer = document.getElementById('compliment-container');

function displayRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    complimentContainer.innerText = compliment;
}

// Call the function to display an initial compliment
displayRandomCompliment();

// You can use setInterval to update the compliment regularly
// setInterval(displayRandomCompliment, 24 * 60 * 60 * 1000); // Once per day
