let imgId = 1;
let imgIdMax = 1;
let imgIdPrev;
let showImgTimer;
let timer;

const fadeIn = (elem, time) => {
    elem.style.display = 'inline-block';
    elem.style.opacity = 0;

    let fadeTimer;
    let start = Date.now();

    const changeOpacity = () => {
        elem.style.opacity = +elem.style.opacity + (Date.now() - start) / time;
        start = Date.now();

        if (+elem.style.opacity < 1) {
            fadeTimer = setTimeout(changeOpacity, 16);
        } else {
            clearTimeout(fadeTimer);
        }
    };

    changeOpacity();
};

const fadeOut = (elem, time) => {
    elem.style.opacity = 1;

    let start = Date.now();
    let fadeTimer;

    const changeOpacity = () => {
        elem.style.opacity = +elem.style.opacity - (Date.now() - start) / time;
        start = Date.now();

        if (+elem.style.opacity > 0) {
            fadeTimer = setTimeout(changeOpacity, 16);
        } else {
            elem.style.display = 'none';
            clearTimeout(fadeTimer);
        }
    };

    changeOpacity();
};

 const showImg = id => {
     if (id !== imgIdPrev) {
         fadeIn(document.querySelector(`img[data-img-id='${id}']`), 500);
         fadeOut(document.querySelector(`img[data-img-id='${imgIdPrev}']`), 500);
     }

     imgIdPrev = id;
};

const startTimer = () => {
    let cnt = 10;

    document.querySelector('.timer-container span').innerHTML = cnt;

    timer = setInterval(()=> {
        cnt--;
        document.querySelector('.timer-container span').innerHTML = cnt;
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timer);
};

const stopImgTimer = () => {
    clearTimeout(showImgTimer);
};

const startShowImg = () => {
    document.querySelector('.btn-stop').disabled = false;
    document.querySelector('.btn-start').disabled = true;

    showImgTimer = setTimeout(function run() {
        stopTimer();
        startTimer();

        if (imgId > imgIdMax) {
            imgId = 1;
        }

        showImg(imgId);

        imgId++;
        showImgTimer = setTimeout(run, 10000);
    });
};

const stopShowImg = () => {
    stopTimer();
    stopImgTimer();
    document.querySelector('.timer-container span').innerHTML = '0';
    document.querySelector('.btn-stop').disabled = true;
    document.querySelector('.btn-start').disabled = false;

    imgId--;
};

const onReady = () => {
    const lastImgEl = document.querySelector('.images-wrapper').lastElementChild;
    const btnStart = document.querySelector('.btn-start');
    const btnStop = document.querySelector('.btn-stop');

    btnStart.addEventListener('click', startShowImg);
    btnStop.addEventListener('click', stopShowImg);

    imgIdPrev = imgIdMax = lastImgEl.dataset.imgId;
    startShowImg();
};

document.addEventListener('DOMContentLoaded', onReady);