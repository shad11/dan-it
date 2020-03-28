/*
Написать функцию которая принимает два агрумента - число повторений и строку.
Функция возвращает строку с количеством повторений как указано в аргументе.
Функция должна валидировать входящие прааметры по типу данных.
Повторений по умолчанию должно быть 3 а строка по умолчанию "hello"
 */

const calcString = function(num = 3, str = 'hello') {
    let res = '';

    for (let i = 0; i < num; i++) {
        res += str;
    }

    return res;
};

const isValidNumber = function(num) {
    if (typeof num === 'string') {
        num = num.trim();
    }

    return num !== '' && Number.isInteger(+num);
};

const isValidString = function(str) {
    return isNaN(str);
};

let number = prompt('Enter number: ') || '';
while (!isValidNumber(number)) {
    number = prompt('Enter number: ') || '';
}

let str = prompt('Enter string: ');
while (!isValidString(str)) {
    str = prompt('Enter string: ');
}

let res = calcString(number, str);
console.log(res);