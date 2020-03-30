const isNumber = function (num) {
    return !(num === '' || isNaN(num));
};

const isValidOperation = function(operation) {
    return operation === '+' || operation === '-' || operation === '*' || operation === '/';
};

const add = function (num1, num2) {
    return num1 + num2;
};

const minus = function (num1, num2) {
    return num1 - num2;
};

const multiple = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return num1 / num2;
};

const execOperation = function(num1, num2, operation) {
  return operation(num1, num2);
};

let num1;
let num2;
let result;
let operation;

do {
    num1 = prompt('Enter the first number: ', num1 || '') || '';
    num2 = prompt('Enter the second number: ', num2 || '') || '';
} while (!isNumber(num1) || !isNumber(num2));

num1 = +num1;
num2 = +num2;

do {
    operation = prompt('Enter an operation +|-|*|/: ') || '';
} while (!isValidOperation(operation));

switch (operation) {
    case '+':
        result = execOperation(num1, num2, add);
        break;
    case '-':
        result = execOperation(num1, num2, minus);
        break;
    case '*':
        result = execOperation(num1, num2, multiple);
        break;
    case '/':
        result = execOperation(num1, num2, divide);
        break;
}

console.log(`${num1} ${operation} ${num2} = ${result}`);