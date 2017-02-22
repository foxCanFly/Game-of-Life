import loadProcess from './process';


export default class Game {
  constructor(options) {
    this.process = loadProcess(options, synchronize);
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
