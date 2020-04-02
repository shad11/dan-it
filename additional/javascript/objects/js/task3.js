/*
Написать функцию-фабрику, которая возвращает объекты пользователей.
 *
 * Объект пользователя обладает свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 * - Возраст
 * - Пол
 * Функция-фабрика в свою очередь обладает всеми параметрами,
которые отражают вышеописанные свойства объекта.
 * Профессия как параметр функции обладает значением по-умолчанию null.
* Пол как параметр функции может быть только man/woman - иначе генерирует ошибку.
* Возраст как параметр функции может быть только от 0 до 120 - иначе генерирует ошибку.
* Имя и фамилия как параметр функции должны быть только строками - иначе генерирует ошибку.
* У объекта должны быть вспомогательные функции fullName для получения полного имени, fullInfo - для отображения всех данных
 */
const createUser = function(name, surname, age, sex, profession = null) {
    if (sex !== 'man' && sex !== 'woman') {
        alert('Sex isn\'t correct!');
        return;
    }

    if (age < 0 || age >= 120) {
        alert('Age isn\'t correct!');
        return;
    }

    if (!isNaN(name) || !isNaN(surname)) {
        alert('Name|surname isn\'t correct!');
        return;
    }

    return {
        name,
        surname,
        profession,
        age,
        sex,
        fullName() {
            return `${this.name} ${this.surname}`;
        },
        fullInfo() {
            for (let key in this) {
                if (typeof this[key] === 'function') {
                    continue;
                }
                console.log(key + ': ' + this[key]);
            }
        }
    }
};

let user = createUser('Test', 'Test', 18, 'sad');
user = createUser('Test', 'Test', 130, 'woman');
user = createUser('Test', 12, 25, 'woman');
user = createUser('Test', 'Test', 25, 'woman');

console.log(user.fullName());
user.fullInfo();
console.log(user);