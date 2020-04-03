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
            if (/*this[prop.toLowerCase()] === undefined*/!this.existProperty(prop)) {
                return this.throwError('No such property in object');
            }

            if (this.status === 'inactive') {
                return this.throwError('Inactive status, can\'t get property!');
            }

            return this[prop.toLowerCase()];
        },
        setProp(prop, value, pass) {
            if (!this.isValidPass(pass)) {
                return this.throwError('Pass isn\'t correct');
            }

            if (this.existProperty(prop)) {
                return this.throwError('Such property already exists!');
            }

            if (prop.toLowerCase() === 'count') {
                this.checkCount(value);
            }

            this[prop.toLowerCase()] = value;
        },
        changeProp(prop, value, pass) {
            if (!this.isValidPass(pass)) {
                return this.throwError('Pass isn\'t correct');
            }

            if (!this.existProperty(prop)) {
                return this.throwError('No such property!');
            }

            if (prop.toLowerCase() === 'count') {
                this.checkCount(value);
            }

            this[prop.toLowerCase()] = value;
        },
        deleteProp(prop, pass) {
            if (!this.isValidPass(pass)) {
                return this.throwError('Pass isn\'t correct');
            }

            if (!this.existProperty(prop)) {
                return this.throwError('No such property!');
            }

            delete this[prop.toLowerCase()];
        },
        isValidPass(pass) {
            return this.pass === pass;
        },
        existProperty(prop) {
            return prop.toLowerCase() in this;
        },
        throwError(msg) {
            return {
                error: true,
                message: msg,
            }
        },
        checkCount(newValue) {
            if (newValue === 0) {
                this.isSold = false;
                this.status = 'inactive';
            }
        },
    };

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