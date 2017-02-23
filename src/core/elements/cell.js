export default class Cell {
  constructor($root) {
    this.$root = $root;
    this.node = $root[0];
    this.isActive = false;
  }

  next(cells) {
    const aliveCellsCount = getAliveCellsCount(cells);

    if (this.isActive && !(aliveCellsCount === 2 || aliveCellsCount === 3)) {
      this.toggle();
    } else if (!this.isActive && aliveCellsCount === 3) {
      this.toggle();
    }
  }

  toggle() {
    this.isActive = !this.isActive;

    this.handleColor();
  }

  handleColor() {
    if (this.isActive) {
      this.$root.css('background-color', 'white');
    } else {
      this.$root.css('background-color', 'initial');
    }
  }

  deactivate() {
    this.isActive = false;

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
