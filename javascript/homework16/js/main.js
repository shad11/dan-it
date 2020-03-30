const f0 = 0;
const f1 = 1;
let positive = true;

const fib = function(n) {
    switch (n) {
        case 0:
            return f0;
        case 1:
            return f1;
        default:
            return positive
                ? fib(n - 1) + fib(n - 2)
                : fib(n + 2) - fib(n + 1);
    }
};

let num = +prompt('Enter number: ');

positive = num >= 0;

alert(fib(num));