import $ from 'jquery';

import Game from './game';


export default function loadGame(rootNode = '.cube', innerOptions = {}) {
  const $root = $(rootNode);
  const processOptions = Object.assign({}, {
    edgeSize: 5,
    interval: 2000
  }, innerOptions);

  console.log($root);

  return new Game(processOptions);
}
