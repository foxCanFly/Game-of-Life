require('babel-polyfill');

import $ from 'jquery';

import Life from '../core/lifeCore';
import './application.css';

(() => {
  const life = new Life('.cube', { edgeSize: 3 });
  window.life = life;

  addEventListeners(life);
})();

function addEventListeners(life) {
  const $start = $('.controls__item--start');
  const $stop = $('.controls__item--stop');
  const $pause = $('.controls__item--pause');
  const $continue = $('.controls__item--continue');
  const $faster = $('.controls__item--faster');
  const $slower = $('.controls__item--slower');

  $start.on('click', () => {
    $start.hide();
    $pause.show();
    life.start();
  });

  $stop.on('click', () => {
    $continue.hide();
    $pause.hide();
    $start.show();
    life.stop();
  });

  $pause.on('click', () => {
    $continue.show();
    $pause.hide();
    life.pause();
  });

  $continue.on('click', () => {
    $continue.hide();
    $pause.show();
    life.resume();
  });

  $faster.on('click', () => {
    life.makeFaster();
  });

  $slower.on('click', () => {
    life.makeSlower();
  });
}
