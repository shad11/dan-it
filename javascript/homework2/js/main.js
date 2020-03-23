// const DIVIDER = 5;
// let number = prompt('Enter integer number: ') || null;
// let value = 0;
//
// while (number === null || isNaN(number) || !Number.isInteger(+number)) {
//     number = prompt('Entered number isn\'t corrected. Enter integer number: ', number);
// }
// number = +number;
//
// if (number < value) {
//     console.log('Sorry, no numbers');
// }
//
// while (value <= number) {
//     console.log(value);
//     value += DIVIDER;
// }

let m = prompt('Enter the first simple integer number: ') || null;
let n = prompt('Enter the second simple integer number: ') || null;
let errorFirst = true;
let errorSecond = true;

while (true) {
    if (m === null || !Number.isInteger(+m) || +m < 2) {
        errorFirst = true;
    } else if (errorFirst) {
        errorFirst = false;
        m = +m;
        for (let i = 2; i < m; i++) {
            if (m % i === 0) {
                errorFirst = true;
            }
        }
    }

    if (n === null || !Number.isInteger(+n) || +n < 2) {
        errorSecond = true;
    } else if (errorSecond) {
        errorSecond = false;
        n = +n;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                errorSecond = true;
            }
        }
    }

    if (errorFirst) {
        m = prompt('Entered number isn\'t corrected. Enter the first simple integer number: ', m);
    } else if (errorSecond) {
        n = prompt('Entered number isn\'t corrected. Enter the second simple integer number: ', n);
    } else {
        break;
    }
}
/*
let startNumber = m;

while (startNumber <= n) {
    let i = 2;

    for (;i < startNumber; i++) {
        if (startNumber % i === 0) {
            break;
        }
    }

    if (i === startNumber) {
        console.log(startNumber);
    }

    startNumber++;
}*/
simpleNumber:
for (let number = m; number <= n; number++) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            continue simpleNumber;
        }
    }

    console.log(number);
}