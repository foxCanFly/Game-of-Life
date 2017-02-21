export default class LifeCore {
  constructor(root) {
    this.root = root;
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
