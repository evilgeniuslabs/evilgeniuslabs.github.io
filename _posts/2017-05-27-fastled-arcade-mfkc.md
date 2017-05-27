---
layout: post
title: FastLED Arcade for Maker Faire Kansas City 2017
id: mini-wifi-led-controller
imgurId: rp8lLwQ
videoUrl: https://www.youtube.com/embed/uOu8dWnWBQw
excerpt: Fun and interactive project for Maker Faire Kansas City 2017 using LED arcade buttons.
categories: products
redirect_from:
  - /18
  - /mfkc2017
---

### Background

Having already built an [educational project](https://evilgeniuslabs.org/fastled-rgb-hsv-tutorial) for [Maker Faire Kansas City 2017](http://kansascity.makerfaire.com), I wanted something a little more fun and interactive.  So I picked up some [LED Arcade buttons](https://www.amazon.com/Illuminated-button-Buttons-Joystick-Raspberry-Pc/dp/B01LXZSV2N?SubscriptionId=AKIAJN63M3R66BW5WD2A&tag=mediarack05-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01LXZSV2N) and built a little LED strip control box with them, using a [Teensy 3.2](https://www.pjrc.com/store/teensy32.html).

I plan to mount the control box to a table, and mount the LED strip a few feet away.  The wooden box is pretty solid, and I'm hoping it can survive a weekend of constant abuse.

<a href="http://i.imgur.com/rp8lLwQ.png" target="_blank"><img src="http://i.imgur.com/rp8lLwQ.png" style="width:400px" class="img-responsive" /></a>

<h3>Table of Contents</h3>

* TOC
{:toc}

### Parts List

| Name | Qty | Price | Total | Supplier |
| --- | --- |  --- |  --- |  --- |
| [Teensy 3.2](https://www.pjrc.com/store/teensy32.html) | 1 | $19.80 | $19.80 | PJRC
| [Perma-Proto Half-sized Breadboard PCB](https://www.adafruit.com/product/571) | 1 | $12.50 | $12.50 | Adafruit
| [NeoPixel 144 RGB LED Strip - 1m](https://www.adafruit.com/product/1506) | 1 | $59.95 | $59.95 | Adafruit
| [LED Arcade Buttons](https://www.amazon.com/Illuminated-button-Buttons-Joystick-Raspberry-Pc/dp/B01LXZSV2N?SubscriptionId=AKIAJN63M3R66BW5WD2A&tag=mediarack05-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01LXZSV2N) | 1 | $12.88 | $12.88 | Amazon
| [Wooden Box](http://www.michaels.com/wooden-box-by-artminds/10357776.html) | 1 | $5.99 | $5.99 | Michaels
| [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258) | 1 | $0.58 | $0.58 | Digi-Key
| [1000µF Capacitor](http://www.digikey.com/product-detail/en/panasonic-electronic-components/ECA-1EM102/P5156-ND/245015) | 1 | $0.62 | $0.62 | Digi-Key
| [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5U5TA/399-4266-ND/818042) | 1 | $0.30 | $0.30 | Digi-Key
| [470 ohm resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT470R/CF14JT470RCT-ND/1830342) | 1 | $0.10 | $0.10 | Digi-Key

Also needed:

* Stranded wire for the buttons, LEDs, power, etc.
* Solid wire for perma-proto breadboard connections.
* [3 Pin JST SM Connectors](https://www.amazon.com/Black-Plastic-Housing-Female-Connector/dp/B00VG14BSE?SubscriptionId=AKIAJN63M3R66BW5WD2A&tag=mediarack05-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00VG14BSE)
* [SN-48B Crimping Tool](https://www.amazon.com/Iwiss-Crimping-0-14-1-5mm%C2%B2-Connectors-Terminals/dp/B00OMMZ502?SubscriptionId=AKIAJN63M3R66BW5WD2A&tag=mediarack05-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00OMMZ502)

Some of these parts can, of course, be obtained for less at other suppliers.

<a href="http://i.imgur.com/anKPcEq.png" target="_blank"><img src="http://i.imgur.com/anKPcEq.jpg" style="width:400px" class="img-responsive" /></a>

### Assembly

<a href="http://i.imgur.com/bamGsWx.png" target="_blank"><img src="http://i.imgur.com/bamGsWx.jpg" style="width:400px" class="img-responsive" /></a>

I'll try to provide more details later, but the biggest difference with this project (compared to my other projects), was the LED illuminated arcade buttons.  Five pins on the Teensy are used to read the button states and determine when they are pressed.  Another five pins are used to control the button LEDs.  I could have just wired the button LEDs to power and ground and kept them illuminated, but I wanted to be able to control them for more interactivity, for games, animations, etc.  I tried driving them directly from pins on the Teensy, but they output 3.3V which made the LEDs very dim.  I also worried about drawing too much current through the Teensy, since each LED can draw 10mA.  Since I had a lot of 74HCT245 level shifter chips on hand, and planned to use one to drive the LED strip anyway, I tried driving the button LEDs through it and it worked great.  The [datasheet](http://www.ti.com/lit/ds/symlink/sn74hct245.pdf) says not to exceed 35mA per output and 70mA total.

Five Teensy pins are wired to the 74HCT245 level shifter inputs, and then each button LED is wired to a level shifter output and ground.  The button states can be read with digitalRead, and the LEDs can be turned on and off with digitalWrite.

<a href="http://i.imgur.com/ahP4bvR.png" target="_blank"><img src="http://i.imgur.com/ahP4bvR.jpg" style="width:400px" class="img-responsive" /></a>

### Interactions

I quickly got a couple of different interactive modes working:

* Blast: a button's color is added to LED 0 as long as it is held.  Each frame the LED data is shifted down one, so the color scrolls from the start of the strip to the end.  No state data is needed for the LEDs.
* Pulse: similar to Blast, but a button's color is only added to LED 0 when it is first pressed.  The colors then scroll up the strip.
* Launcher: pressing a button launches a ball of the button's color up the strip.  The ball decelerates then drops back down, disappearing at the bottom.  At first I just kept an array of 5 sets of ball data, one for each button.  But that only allowed one ball of each color at a time.  So I reworked the code to allow for up to 100 balls at a time.

### Games

The games took a bit longer to implement, but I was able to reuse some code from my [React](/react) lamp.

* Color Invaders: this is loosely based on [Colour Invaders](http://hamsterworks.co.nz/mediawiki/index.php/Colour_Invaders) by Hamsterworks.  It's a 1D version of Space Invaders, where you have to shoot the incoming color invaders with missiles of the same color.
* Simon: classic [Simon](https://en.wikipedia.org/wiki/Simon_(game)) electronic memory game.
* Juggle: a single colored ball is thrown into the air.  You have to press the same colored button right as the ball hits the bottom to relaunch it and keep it in the air.  If successful, another ball of a different color is launched.  Repeats until you fail.  :)

### Source Code

[https://github.com/jasoncoon/fastled-arcade](https://github.com/jasoncoon/fastled-arcade)
