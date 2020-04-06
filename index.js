const path = require('path');
const events = require('events');
const childProcess = require('child_process');

class Button extends events {
  constructor(pin, pullUp = false) {
    super();
    this._py = childProcess.spawn('python', [path.resolve(__dirname, 'Button.py'), pin]);
    this._py.stderr.on('data', (dataBuffer) => {
      throw new Error(dataBuffer.toString());
    });
    this._py.stdout.on('data', (_data) => {
      const data = parseInt(_data, 10);
      this.emit('changed', parseInt(_data, 10));
      if (data === 1) {
        this.emit(!pullUp ? 'pressed' : 'released');
      } else if (data === 0) {
        this.emit(pullUp ? 'pressed' : 'released');
      }
    });
  }

  destructor() {
    this._py.kill('SIGINT');
  }
}
module.exports = Button;
