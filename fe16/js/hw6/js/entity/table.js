import ActiveTD from "./activeTD.js";

export default class Table {
    WIN_CELLS_CNT = 0;

    constructor(size) {
        this.WIN_CELLS_CNT = size**2/2;
        this._cellsSet = new Set();
        this._userCells = this._systemCells = [];
        this._activeTd = {};
    }

    addTd(id) {
        this._cellsSet.add(id);
    }

    activateTd() {
        this._activeTd = new ActiveTD(this._getCellIdFree());
    }

    checkActivateTd() {
        return Object.keys(this._activeTd).length !== 0;
    }

    deleteTd() {
        if (this._activeTd.userClick) {
            this._userCells = [...this._userCells, this._activeTd.id];
        } else {
            this._systemCells = [...this._systemCells, this._activeTd.id];
        }

        this._activeTd.removeClickEvent();
        this._cellsSet.delete(this._activeTd.id);
    }

    checkWin() {
        if (this._userCells.length >= this.WIN_CELLS_CNT) {
            alert('WOW! Congratulations, you win!');
            return true;
        }

        if (this._systemCells.length >= this.WIN_CELLS_CNT) {
            alert('Oops! Game over, you\'ve lost!');
            return true;
        }

        return false;
    }

    _getCellIdFree() {
        const max = this._cellsSet.size;
        const randomId = Math.floor(Math.random() * max);

        return [...this._cellsSet][randomId];
    }
}