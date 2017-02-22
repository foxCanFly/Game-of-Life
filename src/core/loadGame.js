import $ from 'jquery';

import Game from './game';


export default function loadGame(rootNode, innerOptions = {}) {
  const gameOptions = Object.assign({
    rootNode: '.cube',
    edgeSize: 5,
  }, innerOptions);

  gameOptions.root = $(gameOptions.rootNode);

  return new Game(gameOptions);
}
