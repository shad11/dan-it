const cloneObject = function(object) {
    const newObject = {};

    for (let key in object) {
        if (Array.isArray(object[key])) {
            let [...restArray] = object[key];
            newObject[key] = restArray;
        } else if (typeof object[key] === 'object') {
            newObject[key] = cloneObject(object[key]);
        } else {
            newObject[key] = object[key];
        }
    }

    return newObject;
};

const obj = {
    a: 1,
    b: 3,
    c: 'Test',
    objectIn: {
        aa: 11,
        bb: 33,
        cc: {},
    },
    arr: [22, 33, 'Test'],
    sayHello() {
        alert('Hello')
    },
};

const objNew = cloneObject(obj);

console.log(obj === objNew);
console.log(obj);
console.log(objNew);