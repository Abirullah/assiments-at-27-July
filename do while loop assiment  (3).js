let number = 5; 
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= number);

console.log(`   ${factorial}`);
