/* ЗАДАЧА - 1
* Написать функцию, которая не принимает аргументов и спрашивает пользователя что он ест на завтрак
* Считается что пользователь может ввести только одно блюдо за один раз
* По этому нужно продолжать спрашивать ДО ТЕХ ПОР ПОКА ответом от пользователя не прийдет пустой ввод.
* КАЖДОЕ БЛЮДО, которое введет пользователь нужно помещать в массив fantasticBreakfast, который
* и будет возвращаемым значением функции.
* */

/* ЗАДАЧА - 2
* Написать функцию, которая будет принимать аргументом массив, в котором каждый елемент - название блюда которое пользователь ест на завтрак.
* Нужно поочередно вывести в консоль каждое блюдо из этого массива. При этом удаляя данное блюдо из массива.
* Таком образом после того как все блюда окажутся в консоли - массив должен остаться пустым
* Возвращаемое значение - отсутствует
* Сделать это при помощи классического цикла for И попробовать использовать for of
* */

const getBreakfastData = function() {
    const fantasticBreakfast = [];
    let dish;

    do {
        dish = (prompt('Enter one meal for your breakfast: ') || '').trim();
        fantasticBreakfast.push(dish);
    } while (dish !== '');

    fantasticBreakfast.pop();

    return fantasticBreakfast;
};

const displayBreakfastData = function(breakfastData) {
    const length = breakfastData.length;

    for (let i = 0; i < length; i++) {
        console.log(breakfastData[0]);
        breakfastData.splice(0, 1);//breakfastData.shift();
    }

    // for (let i = length - 1; i >= 0; i--) {
    //     console.log(breakfastData[i]);
    //     breakfastData.pop();
    // }

    // let tmpBreakfastData = breakfastData.slice();
    //
    // for (const meal of tmpBreakfastData) {
    //     console.log(meal);
    //     tmpBreakfastData = tmpBreakfastData.slice(1);
    //     breakfastData.splice(0, 1);
    // }
};

const yourBreakfast = getBreakfastData();
console.log(yourBreakfast);

displayBreakfastData(yourBreakfast);
console.log(yourBreakfast);