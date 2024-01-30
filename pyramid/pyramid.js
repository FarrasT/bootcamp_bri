var prompt = require('prompt-sync')();

var number = prompt('Seberapa tinggi Piramidanya? ');

function pyramid(number) {
    for(let i = 0; i < number; i++) {
        let line = "";
        for (let j = 0; j < number - i - 1; j++) {
            line += " ";
        }
        for (let k = number - i - 1; k < number; k++) {
            line += "*";
        }
        console.log(line);
    }
}

function pyramid_even_odd(number) {
    for(let i = 0; i < number; i++) {
        let line = "";
        for (let j = 0; j < number; j++) {
            line += j < number - i - 1 ? " " : j%2 == 0 ? "#" : "*";
        }
        console.log(line);
    }
}

pyramid(number);
console.log("");
pyramid_even_odd(number);