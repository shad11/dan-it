let imgId = 1;
let imgIdMax = 1;
let imgIdPrev;
let showImgTimer;
let timer;

 function showImg(id) {
     if (imgId !== imgIdPrev) {
         $(`.images-wrapper img:nth-child(${id})`).fadeIn(500);
         $(`.images-wrapper img:nth-child(${imgIdPrev})`).fadeOut(500);
     }

     imgIdPrev = id;
}

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