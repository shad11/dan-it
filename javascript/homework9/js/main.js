const ready = () => {
    let prevLi = document.querySelector('.tabs > li.active');

    document.querySelectorAll('.tabs > li').forEach((elem) => {
        elem.addEventListener('click', () => {
            const tabName = elem.dataset.tab;

            elem.classList.add('active');
            document.querySelector(`#${tabName}`).classList.add('active');

            if (prevLi && prevLi !== elem) {
                const prevTabName = prevLi.dataset.tab;

                prevLi.classList.remove('active');
                document.querySelector(`#${prevTabName}`).classList.remove('active');

                prevLi = elem;
            }
        })
    });
};

document.addEventListener('DOMContentLoaded', ready);