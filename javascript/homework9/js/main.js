const ready = () => {
    let prevLi = document.querySelector('.tabs > li.active');

    document.querySelector('.tabs').addEventListener('click', event => {
        const elem = event.target;

        if (elem.tagName !== 'LI') return;

        const tabName = elem.dataset.tab;
        const currTab = document.querySelector(`#${tabName}`);

        elem.classList.add('active');
        if (currTab) {
            currTab.classList.add('active');
        }

        if (prevLi && prevLi !== elem) {
            const prevTabName = prevLi.dataset.tab;
            const prevTab = document.querySelector(`#${prevTabName}`);

            prevLi.classList.remove('active');
            if (prevTab){
                prevTab.classList.remove('active');
            }

            prevLi = elem;
        }
    });
};

document.addEventListener('DOMContentLoaded', ready);