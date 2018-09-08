---
layout: post
title: Wemos D32 ESP32 Wi-Fi and BLE LED Level Shifter Shield
id: d32-shield
imgurId: LfGW6sl
excerpt: Wi-Fi and BLE controlled, Arduino-compatible addressable RGB LED controller based on the ESP32, with level shifter.
categories: products
redirect_from:
  - /22
---

<img src="https://i.imgur.com/5tyrYe3.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/LfGW6sl.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/kBcTyaj.jpg" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/jasoncoon/wemos-d32-esp32-led-and-level-shifter-shield/) store.


For free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer.  It takes a few weeks, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for [Wemos D32 ESP32 Board](https://wiki.wemos.cc/products:d32:d32) that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars).

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found.  This shifts the 3.3V logic level of the ESP32 to the 5V expected by addressable RGB LEDs.  These projects often work fine without a level shifter, until they don't.

Eight digital output pins (0, 2, 4, 12, 13, 15, 16, 17) are run through the level shifter.

The shield also includes places for data line resistors as recommended when driving LEDs. A large capacitor should be connected across the power and ground connections near the LEDs.  A barrel connector can be added to connect a power supply, but the connector and PCB are only rated for 2.5A.  That's enough for about 50 LEDs at solid white, full brightness.  For larger quantities, power should be connected directly to the LEDs, and/or brightness should be limited in software.

### Specifications

- Size: 2.01 x 1.01 x .063 inch (51.0 x 25.6 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA
- Current Rating: 2.5A

Parts that are **not included**, but are required to assemble:

- [Wemos D32 ESP32 Board](https://wiki.wemos.cc/products:d32:d32)
- [(2) 16-pin Female Headers](https://www.digikey.com/product-detail/en/sullins-connector-solutions/PPTC161LFBN-RC/S7014-ND/810154)
- [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5U5TA/399-4266-ND/818042)
- [(8) 470 ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT470R/CF14JT470RCT-ND/1830342)
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

* Control via a web app over Wi-Fi
* On/Off
* Adjustable brightness
* Choose animation/pattern
* Choose color palette
* Set to any solid color
* Autoplay patterns with adjustable duration

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

I used this [3D printed vise](https://www.thingiverse.com/thing:2801942) to hold the PCB while soldering.

I also built one of these [DIY flexible soldering helping hands](http://www.instructables.com/id/DIY-Flexible-Soldering-Helping-Hand/).

1. Insert the SN74HCT245N Level Shifter chip into the holes in the top side of the board, where indicated. Be sure the notch is correctly aligned toward the 0.1uF capacitor, as indicated with the markings on the PCB. <img src="https://i.imgur.com/194PCuy.jpg" class="img-responsive" />
2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly.
3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins.
4. Insert the 0.1uF capacitor.
5. Insert 300 Ohm to 500 Ohm resistors in each set of holes for each output you plan to use.  Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically. <img src="https://i.imgur.com/j57FbGf.jpg" class="img-responsive" />
6. Trim all the leads with a pair of wire cutters.  Flush diagonal cutters work best.
7. Flip the board over and solder each leg of each resistor.<img src="https://i.imgur.com/yiwSsMK.jpg" class="img-responsive" />
8. Insert the power barrel jack.
9. I used a twist tie through the corner mounting holes to hold it in while I flipped the PCB over and soldered it in.
10. The pads are very large, and connected to large ground and power planes on the board, so they might take a while to heat up before the solder starts to flow around the leads.
11. If possible, use a vise to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.<img src="https://i.imgur.com/mJ5eAVi.jpg" class="img-responsive" />
12. Strip the ends of the wires you'll use to connect the LEDs.<img src="https://i.imgur.com/QSpwkNV.jpg" class="img-responsive" />  I left the wires on the spools, which makes it easier to handle.
13. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.
16. Melt a fair amount of solder on the wire and pad.  The insulation on the wire may start to melt as the wire heats up.  If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.
17. Repeat this process for the other wires.<img src="https://i.imgur.com/Y2lxdRA.jpg" class="img-responsive" />
18. Cut the wires to the desired length and add [JST-SM connectors](https://amzn.to/2P7cvJ1) using a [SN-48B Crimping Tool](https://amzn.to/2P6YpHh).
13. I used double-sided male headers in a small breadboard to hold the female headers correctly aligned while I soldered.<img src="https://i.imgur.com/UhEGkzn.jpg" class="img-responsive" />
