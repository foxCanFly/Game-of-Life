import $ from 'jquery';

import Cell from './cell';


export default class Section {
  constructor(options) {
    this.name = options.name;
    this.edgeSize = options.edgeSize;
    this.$root = $(options.nodeSelector);

    this.cells = initCells(this.$root, this.edgeSize);
  }

  populate() {}
  next() {}
}

function initCells($root, count) {
  const cells = [];

  for (let i = 0; i < Math.pow(count, 2); i++) {
    const $node = $(`<span style='flex-basis: ${100 / count}%'>${i}</span>`);
    const cell = new Cell($node);

    $node[0].getCell = cell;
    $root.append($node);
    cells.push(cell);
  }

  return cells;
}
