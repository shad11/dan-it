const isWordInElem = function(word, elem) {
    if (typeof elem === 'string') {
        const elemWords = elem.toLowerCase().replace(/[.,!?;:()"]/g,' ').split(' ');
        return elemWords.includes(word);
    } else if (typeof elem === 'object') {
        return Object.values(elem).reduce((prev, curr) => prev || isWordInElem(word, curr), false);
    }

    return false;
};

const getPropertyValue = function(elem, keysArray) {
    if (keysArray.length > 1) {
        if (elem.hasOwnProperty(keysArray[0])) {
            return getPropertyValue(elem[keysArray[0]], keysArray.slice(1));
        } else {
            return undefined;
        }
    } else {
        return elem[keysArray[0]];
    }
};

const isWordInFields = function(word, elem, fields) {
    for (const field of fields) {
        const propertyValue = getPropertyValue(elem, field.split('.'));
        if (propertyValue) {
            if (isWordInElem(word, propertyValue)) {
                return true;
            }
        }
    }

    return false;
};

const existInElem = function(elem, wordsArr, checkAll, fields) {
    // if (fields.length > 0) {
        if (checkAll) {
            return wordsArr.every(word => isWordInFields(word.toLowerCase(), elem, fields));
        }

        return wordsArr.some(word => isWordInFields(word.toLowerCase(), elem, fields));
    // }

    // if (checkAll) {
    //     return wordsArr.every(word => isWordInElem(word, elem));
    // }

    // return wordsArr.some(word => isWordInElem(word, elem));
};

const filterCollection = function(array, keyWords, checkAll, ...fields) {
    const keyWordsArr = keyWords.split(' ');

    return array.filter(elem => existInElem(elem, keyWordsArr, checkAll, fields));
};

const items = [
    'test',
    123,
    'test12',
    {
        name: 'bla, test3',
    },
    {
        name: 'test test3',
    },
    {
        name: 'test12',
    },
    {
        name: 'aaaa',
        contentType: {
            name: 'test 1',
        }
    },
];

console.log(filterCollection(items, 'test bla', false, 'name', 'contentType.name'));