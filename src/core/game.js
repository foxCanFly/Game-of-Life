export default class Game {
  constructor(options) {
    this.options = options;
  }

  start() {
    console.log('start');
  }

  stop() {
    console.log('stop');
  }

  pause() {
    console.log('pause');
  }

  resume() {
    console.log('resume');
  }

  makeFaster() {
    console.log('faster');
  }

  makeSlower() {
    console.log('slower');
  }
}
