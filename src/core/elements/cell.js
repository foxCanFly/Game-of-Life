export default class Cell {
  constructor($root) {
    this.$root = $root;
    this.node = $root[0];
    this.isActive = false;
    this.willBeActive = false;
  }

  next(cells) {
    const aliveCellsCount = getAliveCellsCount(cells);

    if (this.isActive && (aliveCellsCount <= 1 || aliveCellsCount > 3)) {
      this.willBeActive = false;
    } else if (!this.isActive && aliveCellsCount === 3) {
      this.willBeActive = true;
    }
  }

  update() {
    this.isActive = this.willBeActive;
    this.handleColor();
  }

  toggle() {
    this.isActive = !this.isActive;
    this.willBeActive = this.isActive;

    this.handleColor();
  }

  handleColor() {
    if (this.isActive) {
      return this.$root.css('background-color', 'white');
    }

    return this.$root.css('background-color', 'initial');
  }

  deactivate() {
    this.isActive = false;
    this.willBeActive = false;

    this.handleColor();
  }
}

function getAliveCellsCount(cells) {
  const arr = cells.filter(cell => {
    if (!cell) {
      return !!Math.round(Math.random());
    }

    return cell.isActive;
  });

  return arr.length;
}
