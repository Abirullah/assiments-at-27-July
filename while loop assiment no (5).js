let base = 4; 
let exponent = 3; 
let result = 1; 

let i = 0;

while (i < exponent) {
    result *= base;
    i++;
}

console.log(`${base}^${exponent} = ${result}`);
