const Button = require('../index');

const button0 = new Button(0);
const button1 = new Button(1);
button0.on('pressed', () => console.log('pressed 0'));
button0.on('released', () => console.log('released 0'));
button1.on('pressed', () => console.log('pressed 1'));
button1.on('released', () => console.log('released 1'));
