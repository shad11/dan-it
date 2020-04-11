/**
 * Задание 4.
 *
 * Написать функцию-помощник кладовщика.
 *
 * Функция обладает одним параметром:
 * - Строка со списком товаров через запятую (water,banana,black,tea,apple).
 *
 * Функция возвращает строку в формате ключ-значение, где ключ — имя товара, а значение — его остаток на складе.
 * Каждый новый товар внутри строки должен содержатся на новой строке.
 *
 * Если какого-то товара на складе нет, в качестве остатка указать «not found».
 *
 * Условия:
 * - Имя товара не должны быть чувствительно к регистру;
 * - Дополнительных проверок совершать не нужно.
 */

const getRandom = function() {
    return Math.floor(Math.random() * 5);
};

const storeHelper = function(products = '') {
    let str = '';

    if (products === '') {
        return str;
    }

    for (const product of products.trim().split(',')) {
        const randomNum = getRandom();
        str += `${product} - ${!randomNum ? 'not found' : randomNum}\n`;
    }

    return str;
};

console.log(storeHelper('water,banana,black,tea,apple'));