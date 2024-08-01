let num = 2; 
let primes = [];

while (num <= 100) {
    let isPrime = true;
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime) {
        primes.push(num);
    }

    num++;
}

console.log(primes)