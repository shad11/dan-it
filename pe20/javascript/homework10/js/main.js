document.addEventListener('DOMContentLoaded', ready);

const passShowHide = elem => {
    const inputEl = elem.closest('.input-wrapper').querySelector('.input-password');

    if (elem.classList.contains('fa-eye-slash')) {
        elem.classList.remove('fa-eye-slash');
        elem.classList.add('fa-eye');
        inputEl.type = 'password';
    } else {
        elem.classList.remove('fa-eye');
        elem.classList.add('fa-eye-slash');
        inputEl.type = 'text';
    }
};

const clearPass = () => {
    const passElList = document.querySelectorAll('.input-password');

    passElList.forEach(passEl => {
        passEl.value = '';
    });
};

const checkPassword = () => {
    const pass = document.querySelector('input[name="pass"]').value.trim();
    const passConfirm = document.querySelector('input[name="passConfirm"]').value.trim();
    const errorEl = document.querySelector('.error');

    errorEl.style.display = 'none';

    if (pass === '') {
        errorEl.style.display = 'block';
    }

    if (pass === passConfirm) {
        alert('Добро пожаловать!');
        clearPass();
    } else {
        errorEl.style.display = 'block';
    }
};

function ready() {
    const passForm = document.querySelector('.password-form');

    passForm.addEventListener('click', event => {
        const elem = event.target;

        if (elem.classList.contains('icon-password')) {
            passShowHide(elem);
        }

        if (elem.tagName === 'BUTTON' && elem.type === 'submit') {
            checkPassword();
            event.preventDefault();
        }
    })
}