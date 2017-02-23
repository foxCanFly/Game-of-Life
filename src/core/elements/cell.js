export default class Cell {
  constructor($root) {
    this.$root = $root;
    this.node = $root[0];
    this.isActive = false;
    this.age = 0;
  }

  next() {}

  toggle() {
    this.isActive = !this.isActive;

    this.handleColor();
  }

  handleColor() {
    if (this.isActive) {
      this.$root.css('background-color', 'black');
    } else {
      this.$root.css('background-color', 'white');
    }
  }
}
