let prevMenuLink;

const onMenuLink = () => {
    prevMenuLink = document.querySelector('.menu__block > li.active');

    document.querySelector('.menu__block').addEventListener('click', (event) => {
        const elem = event.target.closest('li');

        if (prevMenuLink !== elem) {
            prevMenuLink.classList.remove('active');
            elem.classList.add('active');
            prevMenuLink = elem;
        }
    });
};

const onMenuBtn = () => {
    document.querySelector('.menu__btn').addEventListener('click', (event) => {
        const elem = event.target;
        const menuIcon = document.querySelector('.menu__btn > i');

        elem.classList.toggle('active');

        if (elem.classList.contains('active')) {
            document.querySelector('.menu__block').style.display = 'block';
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            document.querySelector('.menu__block').style.display = 'none';
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
};

const onMenu = () => {
    onMenuBtn();
    onMenuLink();
};

const onReady = () => {
    onMenu();
};

document.addEventListener('DOMContentLoaded', onReady);