let prevBtnEl;

const paintBtn = keyCode => {
    const letter = keyCode.indexOf('Key') >= 0 ? keyCode.slice(3) : keyCode;

    const currBtnEl = Array.from(document.querySelectorAll('.btn-wrapper .btn'))
        .find( elem => elem.innerText === letter);

    if (prevBtnEl) {
        prevBtnEl.style.backgroundColor = '#33333a';
    }

    if (!currBtnEl) {
        return;
    }

    currBtnEl.style.backgroundColor = 'blue';
    prevBtnEl = currBtnEl;
};

const onReady = () => {
    document.addEventListener('keyup', event => {
        paintBtn(event.code);
    });
};

document.addEventListener('DOMContentLoaded', onReady);