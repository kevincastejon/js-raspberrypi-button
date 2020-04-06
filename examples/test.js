const Button = require('../index');

const buttonA = new Button(0);
const buttonB = new Button(1);
buttonA.on('pressed', () => console.log('button A pressed'));
buttonA.on('released', () => console.log('button A released'));
buttonA.on('changed', (value) => console.log('button A value is :', value));
buttonB.on('pressed', () => console.log('button B pressed'));
buttonB.on('released', () => console.log('button B released'));
buttonB.on('changed', (value) => console.log('button B value is :', value));
