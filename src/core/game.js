import $ from 'jquery';

import loadProcess from './process';
import loadUi from './ui';
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
    this.sections = options.sections;

    this.ui = loadUi(options);
    this.process = loadProcess(options, this.next.bind(this));
  }

  next() {
    this.sections.forEach(section => section.next());
    this.sections.forEach(section => section.update());
  }

  start() {
    console.log('starting...');

    this.process.start();
  }

  stop() {
    console.log('stopping...');

    this.sections.forEach(section => section.clear());
    this.process.stop();
  }

  pause() {
    console.log('pausing...');

    this.process.stop();
  }

  resume() {
    console.log('resuming...');

    this.process.start();
  }

  makeFaster(delta) {
    console.log('faster...');

    this.process.changeInterval('decr', delta);
  }

  makeSlower(delta) {
    console.log('slower...');

    this.process.changeInterval('incr', delta);
  }
}
