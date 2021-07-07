/* eslint-disable no-plusplus */
export default class CatFlip {
  constructor() {
    this.fieldSize = 4;
    // this.cells = Array.from(document.querySelectorAll('.cell'));
    this.field = document.querySelector('.field');
    this.cells = null;
    this.previousIndex = null;
  }

  createField() {
    for (let i = 0; i < this.fieldSize; i++) {
      const col = document.createElement('div');
      col.classList.add('col');
      this.field.appendChild(col);
      for (let j = 0; j < this.fieldSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        col.appendChild(cell);
      }
    }
    this.cells = Array.from(document.querySelectorAll('.cell'));
  }

  flip() {
    if (document.querySelector('.cat')) {
      document.querySelector('.cat').remove();
    }
    let randomIndex = Math.floor(Math.random() * this.cells.length);
    while (randomIndex === this.previousIndex) {
      randomIndex = Math.floor(Math.random() * this.cells.length);
    }
    const randomCell = this.cells[randomIndex];
    this.previousIndex = randomIndex;
    const cat = document.createElement('div');
    cat.classList.add('cat');
    randomCell.appendChild(cat);
  }
}
