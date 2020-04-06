import wiringpi
import time
import sys
from sys import argv

SW_PIN = int(argv[1]);
wiringpi.wiringPiSetup();
wiringpi.pinMode(SW_PIN, 1) ;
wiringpi.digitalWrite(SW_PIN, 1)
last_state = wiringpi.digitalRead(SW_PIN);
while True:
	state = wiringpi.digitalRead(SW_PIN);
	time.sleep(0.01);
	if state != last_state:
		sys.stdout.write(str(state))
		sys.stdout.flush()
		last_state = state
