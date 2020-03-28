/*
Создайте функцию rgb(), которая будет получать от пользователя через prompt 3 значение и возвращать строку вида "rgb(23,100,134)"
Функция должна валидировать то что ввел пользователь в prompt (доступно только от 0 до 255 включительно)
 */
const isValidColor = function(number) {
  return number >= 0 && number < 256;
};

const getValue = function(message) {
    let num = (prompt(`${message}`) || '').trim();

    while (num === '' || !Number.isInteger(+num) || !isValidColor(+num)) {
        num = (prompt(`${message}`) || '').trim();
    }

    return +num;
};

const rgb = function(red = 0, green = 0, blue = 0) {
    return `rgb(${red}, ${green}, ${blue})`;
};

let red = getValue('Enter red number color:');
let green = getValue('Enter green number color:');
let blue = getValue('Enter blue number color:');

alert(rgb(red, green, blue));