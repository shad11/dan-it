/*
* Осуществляем проверку на корректность введения данных.
* Пользователь должен ввести два числа и символ операции.
* Если пользователь ввел НЕ числа или операцию, которой нет в списке - спрашиваем все по новой, ДО ТЕХ ПОР ПОКА не введет правильно.
*  Список операций:
*   * - умножение
*   + - добавление
*   - - отнимание
*   / - деление
 */
/* ЗАДАНИЕ - 4 калькулятор
* Спрашиваем у пользователя два числа и операцию, которую над ними нужно совершить.
* Осуществляем проверку на корректность введения данных из предыдущего задания.
* Как результат выводим на экран сообщение с результатом выбранной операции над введенными числами.
*
* ПРОДВИНУТАЯ СЛОЖНОСТЬ:
*     - к списку операций добавить -> возведение в степень, взятие корня числа №1 степени числа №2.
*     - хранить в памяти результат последней операции. Если вместо одного из двух чисел введено `PREV_OP` подставлять вместо него результат предыдущей операции
*     - “обернуть” код калькулятора в функцию, которая принимает три аргумента - число1, число2, операция.
*/

let num1;
let num2;
let operation;
let result;
let PREV_OP;
let firstAttempt = true;

while (firstAttempt || confirm('Repeat calculations?')) {
    num1 = getNumber('Enter the first number: ');
    num2 = getNumber('Enter the second number:');
    operation = getOperation();
    result = calc(num1, num2, operation);
    PREV_OP = result;
    alert (`${num1} ${operation} ${num2} = ${result}`);
    firstAttempt = false;
}

function getNumber(message) {
    let num = prompt(message);

    if (num === 'PREV_OP' && parseFloat(PREV_OP)) {
        return PREV_OP;
    }

    while (!parseFloat(num) && parseFloat(num) !== 0) {
        num = prompt(`Error, not number. ${message}`);
        if (num === 'PREV_OP' && parseFloat(PREV_OP)) {
            return PREV_OP;
        }
    }
    return parseFloat(num);
}

function getOperation() {
    let operation = (prompt('Enter an operation *|+|-|/|^|root($)') || '').trim();
    let isValid = operation === '*' || operation === '+' || operation === '-' ||
        operation === '/' || operation === '^' || operation === '$';

    while (!isValid) {
        operation = (prompt('Enter an operation *|+|-|/|^|root($)') || '').trim();
        isValid = operation === '*' || operation === '+' || operation === '-' ||
            operation === '/' || operation === '^' || operation === '$';
    }

    return operation;
}

function calc(num1, num2, operation) {
    switch (operation) {
        case '*':
            return num1 * num2;
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '^':
            return Math.pow(num1, num2);
        case '$':
            if (num1 < 0 && num2 % 2 === 1)
                return -Math.pow(-num1, 1/num2);
            else
                return Math.pow(num1, 1/num2);
    }
}
