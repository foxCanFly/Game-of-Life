import $ from 'jquery';

import Cell from './cell';


export default class Section {
  constructor(options) {
    this.name = options.name;
    this.edgeSize = options.edgeSize;
    this.$root = $(options.nodeSelector);

    this.originalCells = initCells(this.$root, this.edgeSize);
    this.expandedCells = [];
  }

  populate(edges) {
    const { top, right, bottom, left } = edges;

    this.expandedCells.push(null, ...top, null);

    for (let indexY = 0; indexY < this.edgeSize; indexY++) {
      this.expandedCells.push(left[indexY]);

      for (let indexX = 0; indexX < this.edgeSize; indexX++) {
        const position = (indexY * this.edgeSize) + indexX;
        this.expandedCells.push(this.originalCells[position]);
      }

      this.expandedCells.push(right[indexY]);
    }

    this.expandedCells.push(null, ...bottom, null);
  }

  next() {
    this.expandedCells.forEach((cell, index) => {
      if (!this.originalCells.includes(cell)) return;

      cell.next(around(this.expandedCells, index, this.edgeSize));
    });
  }

  clear() {
    this.originalCells.forEach(cell => cell.deactivate());
  }
}

function around(cells, index, edgeSize) {
  const positions = [
    [index - 1],
    [index + 1],
    [index - edgeSize],
    [index + edgeSize],
    [index + (edgeSize + 1)],
    [index + (edgeSize - 1)],
    [index - (edgeSize - 1)],
    [index - (edgeSize + 1)]
  ];

  return positions.map(position => cells[position]);
}


function initCells($root, count) {
  const cells = [];

  for (let i = 0; i < Math.pow(count, 2); i++) {
    const $node = $(`<span style='flex-basis: ${100 / count}%' />`);
    const cell = new Cell($node);

    $node[0].getCell = cell;
    $root.append($node);
    cells.push(cell);
  }

  return cells;
}
