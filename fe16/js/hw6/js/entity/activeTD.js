export default class ActiveTD {
    _userClick = false;

    constructor(id) {
        this._id = id;

        const elemTd = document.querySelector(`#td-${id}`);

        elemTd.addEventListener('click', this._userClickEvent);
        elemTd.style.backgroundColor = 'blue';
    }

    get id() {
        return this._id;
    }

    get userClick() {
        return this._userClick;
    }

    removeClickEvent() {
        const elemTd = document.querySelector(`#td-${this._id}`);

        elemTd.removeEventListener('click', this._userClickEvent, false);

        if (!this._userClick) {
            elemTd.style.backgroundColor = '#F08080';
        }
    }

    _userClickEvent = event => {
        const elemTd = event.target;

        this._userClick = true;
        elemTd.style.backgroundColor = 'green';
    }
}