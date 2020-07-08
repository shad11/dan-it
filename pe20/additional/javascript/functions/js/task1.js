/*
* Написать функцию которая будет принимать два аргумента - число с которого НАЧАТь отсчет и число до которого нужно досчитать.
* Фукция должна валидировать входящие параметры - делать значение по умолчанию (0 и 10)
* Функция должна быть гибкой - и понимать если первое число меньше второго то выводим от первого ко второму, если меньше - то от второго к первому
* Под отсчетом имеется в виду последовательный вывод чисел в консоль с увеличением/уменьшением на единицу.
* Функция должна принимать 3 параметр (необязательный) - шаг итерации. Если пользователь не вводит шаг то он по умолчанию - 1.
 */

const getNumber = function(message) {
    let num;

    do  {
        num = (prompt(`${message}`) || '').trim();
    } while (num === '' || !Number.isInteger(+num));

    return +num;
};

const getStep = function() {
    let step;

    while (confirm('Enter step')) {
        step = (prompt('Enter step: ') || '').trim();

        if (step === '' || !Number.isInteger(+step)) {
            continue;
        }

        step = +step;
        return step < 0 ? -step : step;
    }

    return undefined;
};

let num1 = getNumber('Enter the first number: ');
let num2 = getNumber('Enter the second number: ');
let step = getStep();

showNumbers(num1, num2, step);

function showNumbers(num1 = 0, num2 = 10, step = 1) {
    let from = Math.min(num1, num2);
    let to = Math.max(num1, num2);

    if (step === 0) {
        console.log(from, to);
    } else {
        while (from <= to) {
            console.log(from);
            from += step;
        }
    }
}