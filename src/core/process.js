export default function loadProcess(innerOptions, cb) {
  const processOptions = Object.assign({
    interval: 1000
  }, innerOptions);

  if (cb && typeof cb === 'function') {
    processOptions.callback = cb;
  }

  return new Process(processOptions);
}

class Process {
  constructor({ interval, callback }) {
    this.interval = interval;
    this.callback = callback;
    this.paused = false;
  }

  start() {
    this.processId = setInterval(this.callback, this.interval);
  }

  stop() {
    clearInterval(this.processId);
    this.processId = null;
  }

  pause() {
    if (this.processId) {
      this.paused = true;
      this.stop();
    }
  }

  resume() {
    if (this.paused) {
      this.start();
    }
  }

  restart() {
    this.stop();
    this.start();
  }

  changeInterval(type, delta = 500) {
    if (type === 'incr') {
      this.interval += delta;
    } else if (type === 'decr' && this.interval > 0) {
      this.interval -= delta;
    }

    if (this.processId) {
      this.restart();
    }
  }
}
