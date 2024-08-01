
let targetNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

do {
   
    guess = parseInt(prompt("Guess a number between 1 and 100: "), 10);
    attempts++;
    
    if (guess < targetNumber) {
        console.log("Too low. Try again.");
    } else if (guess > targetNumber) {
        console.log("Too high. Try again.");
    } else if (isNaN(guess)) {
        console.log("Please enter a valid number.");
    }
} while (guess !== targetNumber);

console.log(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`);
