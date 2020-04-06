# raspberrypi-button

## Overview
Monitor momentary push button switch on Raspberry Pi

## Install
Be sure you have installed [WiringPi python library](https://github.com/WiringPi/WiringPi-Python) on your Raspberry Pi.
```
sudo pip install wiringpi
```
Then install this module
```
npm i raspberrypi-button
```

## Usage
This library is using [WiringPi pin numerotation](https://pinout.xyz/pinout/wiringpi#) !
Simply instantiate a Button object specifying the pin number and the pullup mode (default false) into the constructor method. Then listen for the 'pressed', 'released' and/or 'changed' events on the Button object.
```
const Button = require('raspberrypi-button');

// Declare a button on pin 0
const button = new Button(0);

//Listen for events on the button
button.on('pressed', () => console.log('button is pressed'));
button.on('released', () => console.log('button is released'));
button.on('changed', (value) => console.log('button value is :', value));
```
