const COL_CNT = 30;
const ROW_CNT = 30;

const createTable = () => {
    const createTableEl = document.createElement('table');

    for (let row = 0; row < ROW_CNT; row++) {
        const rowEl = document.createElement('tr');

        for (let col = 0; col < COL_CNT; col++) {
            rowEl.append(document.createElement('td'));
        }

        createTableEl.append(rowEl);
    }

    createTableEl.addEventListener('click', event => {
        const elem = event.target;

        if (elem.tagName !== 'TD') {
            return;
        }

        if (elem.classList.contains('active')) {
            elem.classList.remove('active');
        } else {
            elem.classList.add('active');
        }
    });

    return createTableEl;
};

const onReady = () => {
    document.body.append(createTable());

    document.body.addEventListener('click', (event) => {
        const tableEl = document.querySelector('table');

        if (!tableEl || event.target.tagName !== 'BODY') {
            return;
        }

        tableEl.classList.toggle('active');
    });
};

// window.onload = () => {
//     onReady();
// };

document.addEventListener('DOMContentLoaded', onReady);