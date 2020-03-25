const DIVIDER = 5;
let number = (prompt('Enter integer number: ') || '').trim();
let value = 0;

while (number === '' || !Number.isInteger(+number)) {
    number = (prompt('Entered number isn\'t corrected. Enter integer number: ') || '').trim();
}
number = +number;

if (number < value) {
    console.log('Sorry, no numbers');
} else {
    while (value <= number) {
        console.log(value);
        value += DIVIDER;
    }
}

// additional task

let num1 = (prompt('Enter the first simple integer number: ') || '').trim();
let num2 = (prompt('Enter the second simple integer number: ') || '').trim();

while (num1 === '' || num2 === '' || !Number.isInteger(+num1) || !Number.isInteger(+num2)) {
    num1 = (prompt('Enter the first simple integer number: ') || '').trim();
    num2 = (prompt('Enter the second simple integer number: ') || '').trim();
}

num1 = parseInt(num1);
num2 = parseInt(num2);

let m = num1 < num2 ? num1 : num2;
let n = num1 > num2 ? num1 : num2;

simpleNumber:
for (let number = m; number <= n; number++) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            continue simpleNumber;
        }
    }

    console.log(number);
}