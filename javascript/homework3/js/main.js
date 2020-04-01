const isNumber = function (num) {
    return !(num === '' || isNaN(num));
};

const isValidOperation = function(mathOperation) {
    return mathOperation === '+'
        || mathOperation === '-'
        || mathOperation === '*'
        || mathOperation === '/';
};

const add = function (a, b) {
    return a + b;
};

const minus = function (a, b) {
    return a - b;
};

const multiple = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const execOperation = function(a, b, operationCallback) {
  return operationCallback(a, b);
};

let firstNumber;
let secondNumber;
let operation;

do {
    firstNumber = prompt('Enter the first number: ', firstNumber || '') || '';
    secondNumber = prompt('Enter the second number: ', secondNumber || '') || '';
} while (!isNumber(firstNumber) || !isNumber(secondNumber));

firstNumber = +firstNumber;
secondNumber = +secondNumber;

do {
    operation = prompt('Enter an operation +|-|*|/: ') || '';
} while (!isValidOperation(operation));

switch (operation) {
    case '+':
        console.log(execOperation(firstNumber, secondNumber, add));
        break;
    case '-':
        console.log(execOperation(firstNumber, secondNumber, minus));
        break;
    case '*':
        console.log(execOperation(firstNumber, secondNumber, multiple));
        break;
    case '/':
        console.log(execOperation(firstNumber, secondNumber, divide));
        break;
}