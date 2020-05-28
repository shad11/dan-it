const ready = () => {
    let prevLi = document.querySelector('.tabs > li.active');

    document.querySelectorAll('.tabs > li').forEach((elemLi) => {
        elemLi.addEventListener('click', (event) => {
            const elem = event.target;
            const tabName = elem.dataset.tab;
            const currTab = document.querySelector(`#${tabName}`);

            elem.classList.add('active');
            currTab.classList.add('active');

            if (prevLi && prevLi !== elem) {
                const prevTabName = prevLi.dataset.tab;
                const prevTab = document.querySelector(`#${prevTabName}`);

                prevLi.classList.remove('active');
                prevTab.classList.remove('active');

                prevLi = elem;
            }
        })
    });
};

document.addEventListener('DOMContentLoaded', ready);