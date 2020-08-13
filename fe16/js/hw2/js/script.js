const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

const CHECK_PROPERTIES = ['name', 'author', 'price'];

const checkProperties = (object) => {
    for (const prop of CHECK_PROPERTIES) {
        if (!(prop in object)) {
            throw new Error(`A property ${prop} doesn't exist!`);
        }
    }

    return true;
};

const getBooks = () => {
    return books.filter(elem => {
        try {
            return checkProperties(elem);
        } catch (error) {
            console.log(error.message);
        }
    });
};

const createBookUl = (books) => {
    const elemUl = document.createDocumentFragment();
    elemUl.append(document.createElement('ul'));

    books.forEach(book => {
        const elemLi = document.createElement('li');

        CHECK_PROPERTIES.forEach(prop => {
            elemLi.innerHTML += `${prop}: ${book[prop]}; `;
        });
        elemLi.innerHTML = elemLi.innerHTML.charAt(0).toUpperCase() + elemLi.innerHTML.slice(1);

        elemUl.append(elemLi);
    });

    return elemUl;
};

const showBooks = () => {
    const booksArray = getBooks();
    const booksUl = createBookUl(booksArray);
    const elemRoot = document.querySelector('#root');

    elemRoot.append(booksUl);
};

const onReady = () => {
    showBooks();
};

document.addEventListener('DOMContentLoaded', onReady);