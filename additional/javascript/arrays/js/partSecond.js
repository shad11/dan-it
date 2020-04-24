/* ЗАДАЧА - 3
* Написать функцию, которая принимает в качестве аргумента массив
* Возвращаемое значение - новый, другой массив со всеми елементами того, который был передан агрументом
* Сделать это при помощи: обычного циклка for, при помощи метода массива map(), при помощи оператора spread.
*/
const getDuplicateArrayFor = function(arr) {
  const newArr = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
      newArr[i] = arr[i];
  }

  return newArr;
};

const getDuplicateArrayMap = function(arr) {
    return arr.map(element => element);
};

const getDuplicateArraySpread = function(arr) {
    return [...arr];
};

const arr = [1, 3, 4, 6, 'test'];

console.log(getDuplicateArrayFor(arr));
console.log(getDuplicateArrayMap(arr));
console.log(getDuplicateArraySpread(arr));