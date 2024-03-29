---
layout: post
title: Level Shifter FeatherWing
sortKey: Level Shifter FeatherWing
id: level-shifter-featherwing
imgurId: rdqYNG6
excerpt: Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP32, with level shifter.
categories: products
redirect_from:
  - /20
---

<img src="https://i.imgur.com/jz8J5P8.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/cDRWBta.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/XaLZdW2.jpg" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

- TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/11579) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer. It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a FeatherWing (shield/breakout) for [Adafruit Feather Boards](https://www.adafruit.com/category/777) that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars). The [Adafruit ESP32 Feather](https://www.adafruit.com/product/3405) is an excellent mini Wi-Fi development board, based on the ESP32.

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found. This shifts the 3.3V logic level of the ESP32 to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't.

Eight digital output pins (12, 13, 14, 15, 27, 32, 33, SCL) are run through the level shifter.

The shield also includes places for data line resistors as recommended when driving LEDs. A large capacitor should be connected across the power and ground connections near the LEDs. A barrel connector can be added to connect a power supply, but the connector and PCB are only rated for 2.5A. That's enough for about 50 LEDs at solid white, full brightness. For larger quantities, power should be connected directly to the LEDs, and/or brightness should be limited in software.

### Pinout

<a href="https://i.imgur.com/kp3sQae.png" target="_blank">
  <img src="https://i.imgur.com/kp3sQae.png" style="width:400px" class="img-responsive" />
</a>

ESP32 Pins 13, 12, 27, 33, 15, 32, 14, SCL
<a href="https://i.imgur.com/fMmY6OL.png" target="_blank">
<img src="https://i.imgur.com/fMmY6OL.png" style="width:400px" class="img-responsive" />
</a>

ESP8266 Pins 14, 12, 13, 15, 0, 16, 2, 5 (SCL)
<a href="https://i.imgur.com/SjgJWZn.png" target="_blank">
<img src="https://i.imgur.com/SjgJWZn.png" style="width:400px" class="img-responsive" />
</a>

### Specifications

- Size: 2.00 x 0.90 x .063 inch (48.3 x 73.4 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA
- Current Rating: 2.5A

Parts that are **not included**, but are required to assemble:

- [Adafruit ESP32 Feather Board](https://www.adafruit.com/product/3405)
- [12-pin and 16-pin Female Header Set](https://www.adafruit.com/product/2886)
- [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5R5TA/399-9776-ND/3726028)
- [330 Ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730)
- [Power Barrel Connector Jack](https://www.digikey.com/product-detail/en/cui-inc/PJ-102A/CP-102A-ND/275425)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/esp32-fastled-webserver](https://github.com/jasoncoon/esp32-fastled-webserver)

<img src="https://i.imgur.com/ks1Zyfa.png" style="width:600px" class="img-responsive" />

Features:

- Control via a web app over Wi-Fi
- On/Off
- Adjustable brightness
- Choose animation/pattern
- Choose color palette
- Set to any solid color
- Autoplay patterns with adjustable duration

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

I used this [3D printed vise](https://www.thingiverse.com/thing:2801942) to hold the PCB while soldering.

I also built one of these [DIY flexible soldering helping hands](http://www.instructables.com/id/DIY-Flexible-Soldering-Helping-Hand/).

1. Insert the SN74HCT245N Level Shifter chip into the holes in the top side of the board, where indicated. <img src="https://imgur.com/mzgFBwC.jpg" class="img-responsive" />
2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly.
3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins.
4. Insert the 0.1uF capacitor.
5. Insert 300 Ohm to 500 Ohm resistors in each set of holes for each output you plan to use. Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically.
6. Trim all the leads with a pair of wire cutters. Flush diagonal cutters work best.
7. Flip the board over and solder each leg of each resistor.<img src="https://imgur.com/C09pFod.jpg" class="img-responsive" />
8. Insert the power barrel jack.<img src="https://imgur.com/NEs4nTV.jpg" class="img-responsive" />
9. I used a twist tie through the corner mounting holes to hold it in while I flipped the PCB over and soldered it in.<img src="https://imgur.com/3XlQiGy.jpg" class="img-responsive" />
10. The pads are very large, and connected to large ground and power planes on the board, so they might take a while to heat up before the solder starts to flow around the leads.<img src="https://imgur.com/8NVusfc.jpg" class="img-responsive" />
11. If possible, use a vise to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.<img src="https://imgur.com/wwEqib0.jpg" class="img-responsive" />
12. Strip the ends of the wires you'll use to connect the LEDs.<img src="https://imgur.com/QSpwkNV.jpg" class="img-responsive" /> I left the wires on the spools, which makes it easier to handle.
13. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.
14. Melt a fair amount of solder on the wire and pad. The insulation on the wire may start to melt as the wire heats up. If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.
15. Repeat this process for the other wires.<img src="https://imgur.com/Y2lxdRA.jpg" class="img-responsive" />
16. Cut the wires to the desired length and add [JST-SM connectors](https://amzn.to/2P7cvJ1) using a [SN-48B Crimping Tool](https://amzn.to/2P6YpHh).
17. I used double-sided male headers in a small breadboard to hold the female headers correctly aligned while I soldered.<img src="https://imgur.com/UhEGkzn.jpg" class="img-responsive" />
