/**
 Напишите функцию, которая принимает как аргумент строку в формате '22/12/2017' а возвращает объект со свойствами:
 день, месяц, год, день недели (на украинском языке).
 P.S. Допускается использование дополнительных массивов строк
 */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const prepareDate = (str) => {
    const newStr = str.split('/').reverse().join('-');

    return new Date(newStr);
};

const convertDate = function(str) {
    const newDate = prepareDate(str);

    return {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear(),
        dayOfWeek: days[newDate.getDay()],
    }
};

console.log(convertDate('22/12/2017'));

/**
 Написать функцию, которая принимает аргументом строку с датой в формате "ДД/ММ/ГГГГ"
 ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ: день недели первого дня месяца
 Написать такую же функцию для получения дня недели последнего дня месяца.
 */
const getFirstDayOfMonth = function(str) {
    const newDate = prepareDate(str);
    newDate.setDate(1);

    return days[newDate.getDay()];
};

const getLastDayOfMonth = function(str) {
    const newDate = prepareDate(str);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(0);

    return days[newDate.getDay()];
};

console.log(getFirstDayOfMonth('19/04/2020'));
console.log(getLastDayOfMonth('19/04/2020'));

/**
 напишите функцию, которая спрашивает у человека его имя и дату рождения в формате ДД/ММ/ГГГГ.
 Функция должна создать объект в котором будет добавлено новое свойсво age (которое нужно вычислить),
 а также функция getDaysToHB - которая отображает сколько осталось дней до дня рождения человека
 */
const getUserBirth = function() {
    const enterDate = new Date();
    const name = prompt('Enter name: ');
    let dateStr;
    let birthDate;
    let age;

    do {
        dateStr = prompt('Enter your birthday (dd/mm/yyyy): ');
        birthDate = prepareDate(dateStr);
        age = enterDate.getFullYear() - birthDate.getFullYear()
    } while (age >= 120);

    return {
        name,
        birthDate,
        age,
        getDaysToHB() {
            const currDate = new Date();
            const newDate = new Date(currDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

            if ((currDate.getMonth() < newDate.getMonth())
                || (currDate.getMonth() === newDate.getMonth() && currDate.getDate() > newDate.getDate())
            ) {
                newDate.setFullYear(newDate.getFullYear() + 1);

            }

            return Math.ceil((newDate.getTime() - currDate.getTime()) / (1000 * 3600 * 24));
        }
    }
};

const user = getUserBirth();

console.log(user);
console.log(user.getDaysToHB());