export default function loadProcess(innerOptions, cb) {
  const processOptions = Object.assign({
    interval: 2000
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
  }

  start() {
    this.process = setInterval(this.callback, this.interval);
  }

  stop() {
    clearInterval(this.process);
    this.process = null;
  }

  restart() {
    this.stop();
    this.start();
  }

  changeInterval(type, delta = 250) {
    if (type === 'incr') {
      this.interval += delta;
    } else if (type === 'decr') {
      this.interval -= delta;
    }

    if (this.process) {
      this.restart();
    }
  }
}
