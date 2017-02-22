require('babel-polyfill');

import $ from 'jquery';

import Game from '../core/loadGame';
import './application.css';


(() => {
  const game = new Game('.cube', { edgeSize: 3 });
  window.game = game;

  addEventListeners(game);
})();

function addEventListeners(game) {
  const $start = $('.controls__item--start');
  const $stop = $('.controls__item--stop');
  const $pause = $('.controls__item--pause');
  const $continue = $('.controls__item--continue');
  const $faster = $('.controls__item--faster');
  const $slower = $('.controls__item--slower');

  $start.on('click', () => {
    $start.hide();
    $pause.show();
    game.start();
  });

  $stop.on('click', () => {
    $continue.hide();
    $pause.hide();
    $start.show();
    game.stop();
  });

  $pause.on('click', () => {
    $continue.show();
    $pause.hide();
    game.pause();
  });

  $continue.on('click', () => {
    $continue.hide();
    $pause.show();
    game.resume();
  });

  $faster.on('click', () => {
    game.makeFaster();
  });

  $slower.on('click', () => {
    game.makeSlower();
  });
}
