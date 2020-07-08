/* ЗАДАЧА - 5
* есть некий "склад", он же исходный массив, внутри которого лежат названия товаров.
* Пользователь желает вместо определенного товара(!одного!) вставить один или несколько новых.
*
* НУЖНО написать функцию replaceItems(insteadOf, insertValue):
* где insteadOf хранит строчное значение названия товара ВМЕСТО какого именно товара он будет вставлять новые.
* ОБЯЗАТЕЛЬНО ПРОВЕРИТЬ ЕСТЬ ЛИ ТАКОЙ ТОВАР НА СКЛАДЕ, если товара нет - спросить у пользователя корректные данные.
* insertValue - список елементов которые нужно вставить - один или несколько
*
* ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ - отсутствует
* В исходном массиве(складе) ЗАМЕНИТЬ указанный товар, НА insertValue так, чтобы длинна исходного массива изменилась, т.е. каждый введенный пользователем товар добавляется отдельным товаром в уже существующий склад.
*/

const storeArray = [
    'Item1',
    'Item2',
    'Item3',
    'Item4',
    'Item5'
];

const replaceItems = function(insteadOf, insertValue) {
    let indexItem;

    while ((indexItem = storeArray.indexOf(insteadOf)) === -1) {
        insteadOf = prompt('Enter a correct item: ') || '';
    }

    storeArray.splice(indexItem, 1, ...insertValue);
};

const insertSet = new Set(['NewItem1', 'NewItem2']);
replaceItems('Item2', insertSet);