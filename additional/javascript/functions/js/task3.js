/*
Создайте функцию rgb(), которая будет получать от пользователя через prompt 3 значение и возвращать строку вида "rgb(23,100,134)"
Функция должна валидировать то что ввел пользователь в prompt (доступно только от 0 до 255 включительно)
 */
const isValidColor = function(number) {
  return number >= 0 && number <= 255;
};

const getValue = function(message) {
    let num;

    do {
        num = (prompt(`${message}`) || '').trim();
    } while (num === '' || !Number.isInteger(+num) || !isValidColor(+num));

    return +num;
};

const rgb = function() {
    let red = getValue('Enter red number color:');
    let green = getValue('Enter green number color:');
    let blue = getValue('Enter blue number color:');

    return `rgb(${red}, ${green}, ${blue})`;
};

alert(rgb());