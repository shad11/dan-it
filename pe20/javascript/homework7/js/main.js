const CLEAR_TIMEOUT = 10000;

// creating LI element if string, or UL if object/array
const createTemplate = (element) => {
    if (Array.isArray(element)) {
        return `<li><ul>
        ${ element
            .map(elem => createTemplate(elem))
            .join('') 
        }
        </ul></li>`;
    } else if (typeof element === 'object') {
        return `<li><ul>
        ${ Object.values(element)
            .map(elem => createTemplate(elem))
            .join('') 
        }
        </ul></li>`;
    } else {
        return `<li>${element}</li>`;
    }
};

// main method: creating and show the list
const outputArray = (array) => {
    const elementUL = document.createElement('ul');

    const listHTML = array.map(element => createTemplate(element)).join('');

    elementUL.insertAdjacentHTML('beforeend', listHTML);
    document.querySelector('.list-block').append(elementUL);
};

// timer and cleaning document
const clearDocument = () => {
    let cnt = 10;

    document.querySelector('.timer-container').innerHTML = cnt;

    const timer = setInterval(()=> {
        cnt--;
        document.querySelector('.timer-container').innerHTML = cnt < 1 ? '' : cnt;
    }, 1000);

    setTimeout(() => {
        document.querySelector('.list-block').innerHTML = '';
        clearInterval(timer);
    }, CLEAR_TIMEOUT);
};
/*
const examples = [
    ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'],
    ['hello', 'world', 'Kiev', 'Kharkiv', 'Lviv', ['1', '2', '3', 'sea', 'user', 23], 'Odessa', {'name': 'Hanna', 'surname': 'Sachok'}],
    ['1', '2', '3', 'sea', 'user', 23]
];

examples.forEach((elem, index) => {
    setTimeout(() => {
        outputArray(elem);
        clearDocument();
    }, index * (CLEAR_TIMEOUT + 10));
});
*/
const listArray = ['hello', 'world', 'Kiev', 'Kharkiv', 'Lviv', ['1', '2', '3', 'sea', 'user', 23], 'Odessa', {'name': 'Hanna', 'surname': 'Sachok'}];
outputArray(listArray);
clearDocument();