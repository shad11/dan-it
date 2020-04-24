/* ЗАДАЧА - 4
* Написать функцию getItemList(), которая будет получать от пользователя строку с перечисленными через запятую названиями товаров
* (они могут повторяться). После этого нужно преобразовать строку в МАССИВ С УНИКАЛЬНЫМИ ЗНАЧЕНИЯМИ (несколькими способами, включая SET)
*/

const getArrayFromStr = function(str) {
    return str.split(',').map(elem => elem.trim());
};

const getItemListWithCycle = function(itemsStr) {
    const itemsArray = getArrayFromStr(itemsStr);
    const newArray = [];

    for (const item of itemsArray) {
        if (newArray.includes(item)) {
            continue;
        }
        newArray.push(item);
    }

    return newArray;
};

const getItemListWithFilter = function(itemsStr) {
  const itemsArray = getArrayFromStr(itemsStr);

  return itemsArray.filter((item, index) => itemsArray.indexOf(item) === index);
};

const getItemListWithSet = function(itemsStr) {
    return [...new Set(getArrayFromStr(itemsStr))];
};

const items = 'table, chair, sofa, doors, mirror, table';

console.log(getItemListWithCycle(items));
console.log(getItemListWithFilter(items));
console.log(getItemListWithSet(items));