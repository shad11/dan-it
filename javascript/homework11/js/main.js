let prevBtnEl;
let listBtn = [];

const paintBtn = keyCode => {
    if (prevBtnEl) {
        prevBtnEl.style.backgroundColor = '#33333a';
    }

    if (!listBtn.includes(keyCode)) {
        return;
    }

    const currBtnEl = document.querySelector(`[data-key-code='${keyCode}']`);

    currBtnEl.style.backgroundColor = 'blue';
    prevBtnEl = currBtnEl;
};

const onReady = () => {
    document.querySelectorAll('.btn-wrapper .btn').forEach(elem => {
        const keyCode = elem.innerText.length > 1 ? elem.innerText : 'Key' + elem.innerText.toUpperCase();

        elem.dataset.keyCode = keyCode;
        listBtn.push(keyCode);
    });

    document.addEventListener('keyup', event => {
        paintBtn(event.code);
    });
};

document.addEventListener('DOMContentLoaded', onReady);