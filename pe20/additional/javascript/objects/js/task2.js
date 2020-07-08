/*
Написать функцию-помощник для ресторана.
* Функция обладает двумя параметрами:
    * - Размер заказа (small, medium, large);
* - Тип обеда (breakfast, lunch, dinner).
* Функция возвращает объект с двумя полями:
    * - totalPrice — общая сумма блюда с учётом его размера и типа;
* - totalCalories — количество калорий, содержащееся в блюде с учётом его размера и типа.
* - Дополнительные проверки совершать не нужно;
 */
const priceList = {
    sizes: {
        small: {
            price: 15,
            calories: 250,
        },
        medium: {
            price: 25,
            calories: 340,
        },
        large: {
            price: 35,
            calories: 440,
        },
    },
    types: {
        breakfast: {
            price: 4,
            calories: 25,
        },
        lunch: {
            price: 5,
            calories: 5,
        },
        dinner: {
            price: 10,
            calories: 50,
        },
    },
};

const getOrder = function(orderSize, orderType) {
    if (!orderSize in priceList.sizes || !orderType in priceList.types) {
        return {
            error: true,
            message: 'Unavailable parameters!',
        };
    }

    const totalPrice = priceList.sizes[orderSize].price + priceList.types[orderType].price;
    const totalCalories = priceList.sizes[orderSize].calories + priceList.types[orderType].calories;

    return {
        totalPrice,
        totalCalories,
    };
};

console.log(getOrder('medium', 'lunch'));