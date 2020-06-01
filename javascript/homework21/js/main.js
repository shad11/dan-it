const INPUT_CIRCLE_CLASS = 'input-circle-block';
const CIRCLE_BLOCK_CLASS = 'circle-block';
const CIRCLES_ROW_CNT = 10;
const CIRCLES_COLUMN_CNT = 10;

const createCircleEl = diameter => {
    const circleEl = document.createElement('div');

    circleEl.classList.add('circle');
    circleEl.style.cssText = `
        display: inline-block;
        width: ${diameter}px;
        height: ${diameter}px;
        border-radius: 50%;
        background-color: green;
    `;

    return circleEl;
};

const createCircleBlock = (width = 0) => {
    const circlesBlock = document.createElement('div');

    circlesBlock.classList.add(CIRCLE_BLOCK_CLASS);
    circlesBlock.style.marginTop = '20px';
    circlesBlock.style.width = `${width}px`;

    circlesBlock.addEventListener('click', event => {
        const elem = event.target;

        if (elem.classList.contains('circle')) {
            elem.remove();
        }
    });

    return circlesBlock;
};

const removeCircleBlock = () => {
    const circleBlockEl = document.querySelector(`.${CIRCLE_BLOCK_CLASS}`);

    if (circleBlockEl) {
        circleBlockEl.remove();
    }
};

const drawCircles = () => {
    const diameter = document.querySelector('#diameter').value;
    const circlesBlockEl = createCircleBlock(diameter*CIRCLES_COLUMN_CNT);
    const fragment = new DocumentFragment();

    for (let row = 0; row < CIRCLES_ROW_CNT; row++) {
        for (let column = 0; column < CIRCLES_COLUMN_CNT; column++) {
            fragment.append(createCircleEl(diameter));
        }
    }

    removeCircleBlock();
    circlesBlockEl.append(fragment);
    document.body.append(circlesBlockEl);
};

const createInputCircleBlock = () => {
    const inputCircleBlock = document.createElement('div');
    inputCircleBlock.classList.add(INPUT_CIRCLE_CLASS);

    inputCircleBlock.insertAdjacentHTML('beforeend', `
    <br>
    <label for="radius">Diameter</label>
    <input type="text" id="diameter">
    `);

    const drawBtn = document.createElement('button');
    drawBtn.innerText = 'Draw';

    drawBtn.addEventListener('click', drawCircles);

    inputCircleBlock.append(drawBtn);
    return inputCircleBlock;
};

const removeInputCircleBlock = () => {
    const inputCircleBlock = document.body.querySelector(`.${INPUT_CIRCLE_CLASS}`);

    if (inputCircleBlock) {
        inputCircleBlock.remove();
    }
};

window.onload = () => {
    document.querySelector('.circleBtn').addEventListener('click', () => {
        const inputCircleBlockEl = createInputCircleBlock();

        removeCircleBlock();
        removeInputCircleBlock();

        document.body.append(inputCircleBlockEl);
    });
};