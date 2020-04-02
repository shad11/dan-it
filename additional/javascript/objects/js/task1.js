/*
- Создать объект Car в котором есть 3 свойства - model, name, price.
- Добавить метод, который меняет значение указанного свойства объекта.
// Метод должен быть «умным» — он генерирует ошибку(консоль/алерт) при совершении попытки смены значения несуществующего в объекте свойства.
// Он прнимает как аргументы - свойсвто которое нужно изменить и новое значение для этого свойства
- Добавить метод который принимает ключ объекта как аргумент и возвращает свойство - если такого свойства нет - возвращает ошибку
- Добавить метод, который добавляет объекту новое свойство с указанным значением. Метод должен генерировать ошибку при создании нового свойства
если свойство с таким именем уже существует.
*/
const Car = {
    model: 'BMW',
    name: 'X5',
    price: 1000,
    getProperty(key) {
        return this[key] === undefined ? 'Error: no such property' : this[key];
    },
    changeProperty(key, newValue) {
        if (this[key] === undefined) {
            console.log('No such property!');
        } else {
            this[key] = newValue;
        }
    },
    addProperty(key, newValue) {
        if (key in this) {
            console.log('Such property already exists!');
        } else {
            this[key] = newValue;
        }
    },
};

Car.changeProperty('brand', 'BMW');
Car.changeProperty('model', 'KIA');

console.log(Car.getProperty('brand'));
console.log(Car.getProperty('model'));

Car.addProperty('model', 'KIA');
Car.addProperty('color', 'green');



