// Создать функцию, которая будет создавать  и возвращать новый объект Продукта.
// Функция принимает несколько параметров:
// -обязательные: название, цена, количество, владелец, пароль, краткое описание, статус (активный или нет)
// -необязательные: продается (boolean)
// Пользователь вызывает функцию c параметрами и получает объект с настройками
// все свойства которые были переданы и функции:
// getAllProps - получить все свойства в объекте
// getProp - получить свойство, если свойства нет - оши
// setProp - принимает пароль, если пароль совпадает, тогда изменяет, если нет - то возвращает ошибку
// deleteProp - удаляет свойство с паролем
// changeProp - изменяет значение с паролем
// если меняется количество товара к 0, тогда isSold - становится автоматически false и статус inactive
// если у товара статус inactive - тогда никакое значение получить нельзя (через get) - только тот кто создал может его отредактировать

const createProduct = function(params) {
    const { name, price, count, owner, pass, desc, status, isSold = true } = params;

    const newProduct = {
        name,
        price,
        count,
        owner,
        pass,
        desc,
        status,
        isSold,
        getAllProps() {
            for (let key in this) {
                if (typeof this[key] === 'function') {
                    continue;
                }

                console.log(key + ': ' + this[key]);
            }
        },
        getProp(prop) {
            if (/*this[prop.toLowerCase()] === undefined*/!existProperty(prop)) {
                return throwError('No such property in object');
            }

            if (this.status === 'inactive') {
                return throwError('Inactive status, can\'t get property!');
            }

            return this[prop.toLowerCase()];
        },
        setProp(prop, value, pass) {
            if (!isValidPass(pass)) {
                return throwError('Pass isn\'t correct');
            }

            if (existProperty(prop)) {
                return throwError('Such property already exists!');
            }

            if (prop.toLowerCase() === 'count') {
                this.checkCount(value);
            }

            this[prop.toLowerCase()] = value;
        },
        changeProp(prop, value, pass) {
            if (!isValidPass(pass)) {
                return throwError('Pass isn\'t correct');
            }

            if (!existProperty(prop)) {
                return throwError('No such property!');
            }

            if (prop.toLowerCase() === 'count') {
                this.checkCount(value);
            }

            this[prop.toLowerCase()] = value;
        },
        deleteProp(prop, pass) {
            if (!isValidPass(pass)) {
                return throwError('Pass isn\'t correct');
            }

            if (!existProperty(prop)) {
                return throwError('No such property!');
            }

            delete this[prop.toLowerCase()];
        },
        checkCount(newValue) {
            if (newValue === 0) {
                this.isSold = false;
                this.status = 'inactive';
            }
        },
    };

    function isValidPass(pass) {
        return newProduct.pass === pass;
    }

    function existProperty(prop) {
        return prop.toLowerCase() in newProduct;
    }

    function throwError(msg) {
        return {
            error: true,
            message: msg,
        }
    }

    return newProduct;
};

const product = createProduct({
    name: 'Test',
    price: 12,
    count: 3,
    owner: 'John Smith',
    pass: 4444,
    desc: 'testing',
    status: 'active',
});

console.log(product.getProp('name'));

product.setProp('priceMax', 13, 4444);
product.getAllProps();

product.changeProp('price', 20, 4444);
product.getAllProps();

product.deleteProp('priceMax', 4444);
product.getAllProps();