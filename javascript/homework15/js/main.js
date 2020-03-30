const factorial = function(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

const isValidNumber = function(num) {
    if (typeof num === 'string') {
        if (num === '' || isNaN(+num)) {
            return false;
        }

        num = +num;
    }

    return Number.isInteger(num) ? num >= 0 : false;
};

let num;

do {
    num = (prompt('Enter number: ') || '').trim();
} while (!isValidNumber(num));

num = +num;

alert(factorial(num));