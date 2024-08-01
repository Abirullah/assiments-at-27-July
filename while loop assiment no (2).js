// const number=Math.floor(Math.random()*100)+1;
// let guss=3;


// while(guss !==number){

//     guss=parseInt(prompt("Guss a number B/W 1 and 100") ,10);


// if(isNaN(guss)){
//     alert("plz gave a valid number")
// }
// else if(guss>number){
//     alert("plz give a smaller value")
// }
// else if(guss<number){
//     alert("plz give a grater value")
// }
// else{
//     alert("congrate you are correct")
// }


// }



// Generate a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== number) {
    // Prompt the user for a guess
    guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);

    // Check if the input is a valid number
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess > number) {
        alert("Too high! Please give a smaller value.");
    } else if (guess < number) {
        alert("Too low! Please give a greater value.");
    } else {
        alert("Congratulations! You are correct.");
    }
}
