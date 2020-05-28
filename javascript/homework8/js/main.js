const addListener = (element, event, handler, options = {}) => {
    element.addEventListener(event, handler, options);
};
const resetPrice = () => {
    document.querySelector('.price-block').style.display = 'none';
    document.querySelector('#price').value = '';
};

const focusHandler = event => {
    const elem = event.target;

    document.querySelector('.error').style.display = 'none';
    elem.classList.add('focus');
};

const blurHandler = event => {
    const elem = event.target;
    const newPrice = parseFloat(elem.value);

    elem.classList.remove('focus');

    if (elem.value.trim() === '') {
        return;
    }

    if (isNaN(newPrice) || newPrice < 0) {
        document.querySelector('.price-block').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    } else {
        document.querySelector('.priceCurrent').innerHTML = newPrice;
        document.querySelector('.price-block').style.display = 'block';
    }

};

addListener(document.querySelector('#price'), 'focus', focusHandler);
addListener(document.querySelector('#price'), 'blur', blurHandler);
addListener(document.querySelector('.price-btn'), 'click', resetPrice);