/*
ЗАДАНИЕ - 2 Вывести в консоль первые 147 нечетных чисел.
*   ПРОДВИНУТАЯ СЛОЖНОСТЬ - не выводить в консоль те из них, которые делятся на 5.
 */
const countNum = 147;
let number = 0;
let cnt = 0;

while (cnt < countNum) {
    if (number % 2 === 0) {
        cnt++;
        if (number % 5 > 0) {
            console.log(number);
        }
    }

    number++;
}