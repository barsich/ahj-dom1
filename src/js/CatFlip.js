export default class CatFlip {
  constructor() {
    this.cells = Array.from(document.querySelectorAll('.cell'));
  }

  flip() {
    if (document.querySelector('.cat')) {
      document.querySelector('.cat').remove();
    }
    const randomCell = this.cells[Math.floor(Math.random() * this.cells.length)];
    const cat = document.createElement('div');
    cat.classList.add('cat');
    randomCell.appendChild(cat);
  }
}
