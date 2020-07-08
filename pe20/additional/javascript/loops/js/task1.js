/*
ЗАДАНИЕ - 2 Вывести в консоль первые 147 нечетных чисел.
*   ПРОДВИНУТАЯ СЛОЖНОСТЬ - не выводить в консоль те из них, которые делятся на 5.
 */
const countNum = 147;
let count = 1;
let number = 1;

while (count <= countNum) {
    if (number % 5 > 0) {
        console.log(number);
    }

    number += 2;
    count++;
}