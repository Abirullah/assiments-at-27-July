let originalString = "Hello, World!";
let reversedStr = "";
let i = originalString.length - 1;

while (i >= 0) {
    reversedStr += originalString[i];
    i--;
}

console.log(reversedStr)