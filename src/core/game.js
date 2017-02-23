import $ from 'jquery';

import loadProcess from './process';
import loadUi from './ui';
import loadEngine from './engine';
import initSections from './elements/initSections';
import linkSections from './elements/linkSections';


export default function loadGame(rootNode, innerOptions = {}) {
  const gameOptions = Object.assign({
    rootNode: '.cube',
    edgeSize: 5,
  }, innerOptions);

  gameOptions.$root = $(gameOptions.rootNode);
  gameOptions.sections = initSections(gameOptions);

  linkSections(gameOptions.sections);

  return new Game(gameOptions);
}


class Game {
  constructor(options) {
    this.ui = loadUi();
    this.engine = loadEngine();
    this.process = loadProcess(options, synchronize);

    console.log(options.sections);
  }

  start() {
    console.log('start');
    this.process.start();
  }

  stop() {
    console.log('stop');
    this.process.stop();
  }

  pause() {
    console.log('pause');
    this.process.stop();
  }

  resume() {
    console.log('resume');
    this.process.start();
  }

  makeFaster(delta) {
    console.log('faster');
    this.process.changeInterval('decr', delta);
  }

  makeSlower(delta) {
    console.log('slower');
    this.process.changeInterval('incr', delta);
  }
}

function synchronize() {
  console.log('lol');
}
