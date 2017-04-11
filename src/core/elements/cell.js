export default class Cell {
  constructor($root) {
    this.$root = $root;
    this.node = $root[0];
    this.isActive = false;
    this.willBeActive = false;
    this.wasActive = false;
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
    this.wasActive = this.isActive;
    this.isActive = this.willBeActive;

    this.handleColor();
  }

  toggle() {
    this.wasActive = this.isActive;
    this.isActive = !this.isActive;
    this.willBeActive = this.isActive;

    this.handleColor();
  }

  handleColor() {
    if (this.wasActive === this.isActive) return;

    if (this.isActive) {
      this.$root.css('background-color', 'rgba(255, 0, 0, 0.8)');
    } else {
      this.$root.css('background-color', 'rgba(0, 0, 0, 0.8)');
    }
  }

  deactivate() {
    if (this.isActive) {
      this.toggle();
    }
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
