const onReady = () => {
    const theme = localStorage.getItem('theme');
    const mainEl = document.querySelector('main');

    if (theme && theme === 'black') {
        mainEl.classList.add('black');
        document.querySelector('.navbar-theme').innerText = 'White theme';
    }

    document.querySelector('.navbar-theme').addEventListener('click', () => {
        mainEl.classList.toggle('black');
        document.querySelector('.navbar-theme').innerText = mainEl.classList.contains('black')
            ? 'White theme'
            : 'Black theme';
    });
};

document.addEventListener('DOMContentLoaded', onReady);

window.addEventListener('beforeunload', () => {
    const mainEl = document.querySelector('main');

    localStorage.setItem('theme', mainEl.classList.contains('black') ? 'black' : 'white');
});