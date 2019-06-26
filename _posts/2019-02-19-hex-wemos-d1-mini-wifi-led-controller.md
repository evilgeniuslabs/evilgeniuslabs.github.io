---
layout: post
title: Hex Wemos D1 Mini Wi-Fi LED Controller
id: hex-wemos-d1-mini-wifi-led-controller
imgurId: e1CwOfg
excerpt: 6 output, Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
categories: products
redirect_from:
  - /29
---

<img src="https://i.imgur.com/fz2cuqp.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/i22hSwj.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/e1CwOfg.png" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/TnjrrRD.png" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/jasoncoon/6-output-wemos-d1-mini-wi-fi-led-controller/) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer. It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for the Wemos D1 Mini (and D1 Mini Pro) ESP8266 board that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars). The Wemos D1 Mini is an excellent mini Wi-Fi development board, based on the ESP8266. I've used it extensively in development of addressable RGB LED art projects, such as my [6.5ft Rainbow Tree](https://www.evilgeniuslabs.org/tree-v2.html), [Bloom v2](bloom-v2.html), and [Ducenti](ducenti.html). This shield supports 6x parallel output.

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found. This shifts the 3.3V logic level of the ESP8266 to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't.

Six digital output pins (D1, D2, D5, D6, D7, D8) are run through the level shifter. These pins support parallel output by the fantastic [FastLED library](https://github.com/FastLED/FastLED/wiki/Parallel-Output).

The shield also includes data line resistors and a large 1000uF capacitor, as recommended when driving LEDs, especially when powering the microcontroller from the same power supply as a large number of LEDs.

The 90 mil, double-sided 5V and GND traces should be rated for up to ~12 amps. That's enough for about 200 LEDs at max output (solid white, full brightness), and much more than 200 LEDs at lower output, lower brightness, and/or multicolor patterns. A barrel connector can be added to connect a power supply, but most are only rated for 2.5A (~50 LEDs at max output). For larger quantities, power should be connected to the PCB directly with large gauge wire, connected directly to the LEDs, and/or brightness should be limited in software. It is very important when using high current power supplies and large numbers of LEDs to watch for overheating on wiring, connectors, components, and the PCB.

### Specifications

- Size: 1.64 x 1.71 x .063 inch (41.61 x 43.4 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA
- Current Rating: 12A

Parts that are **not included**, but are required to assemble:

- [Wemos D1 Mini](https://www.aliexpress.com/store/product/D1-mini-Mini-NodeMcu-4M-bytes-Lua-WIFI-Internet-of-Things-development-board-based-ESP8266/1331105_32529101036.html)
- [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
- [1000µF Capacitor](http://www.digikey.com/product-detail/en/panasonic-electronic-components/ECA-1EM102/P5156-ND/245015)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5R5TA/399-9776-ND/3726028)
- [330 Ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730)
- [Power Barrel Connector Jack](https://www.digikey.com/product-detail/en/cui-inc/PJ-102A/CP-102A-ND/275425)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

### Background

All of my projects lately have been driven by ESP8266 microcontrollers with Wi-Fi support. Following the best practice recommendations of using a fast level shifter, large capacitor, and resistors on the clock and data lines was resulting in a lot of wires on a large perma-proto board. I decided to design a PCB to make it cleaner and more compact.

It's much smaller and easier to assemble, compared to the perma-proto boards I was building:

<img src="/images/tree-v2-board.jpg" style="width:400px" class="img-responsive" />

After trying a lot of different ESP8266 boards, I've found the [Wemos D1 Mini](https://www.wemos.cc/product/d1-mini-pro.html) to be great for the price. It includes an improved CP2104 USB-TO-UART adapter for more reliable, high-speed firmware and SPIFFs updates, larger (16MB) flash storage, etc.

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/esp8266-fastled-webserver/tree/parallel](https://github.com/jasoncoon/esp8266-fastled-webserver/tree/parallel)

<img src="https://github.com/jasoncoon/esp8266-fastled-webserver/raw/master/webapp.png" style="width:300px" class="img-responsive" />

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

1. Insert the SN74HCT245N Level Shifter chip into the holes in the top side of the board, where indicated, with the indentation towards the bottom edge of the board. <img src="https://imgur.com/GWo61Xp.jpg" class="img-responsive" />

2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly.

3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins.

4. Insert the 0.1uF capacitor, flip over and solder. <img src="https://imgur.com/DOSd90N.jpg" class="img-responsive" />

5. Insert a 300 Ohm to 500 Ohm resistor in each set of holes for each output you plan to use. Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically.<img src="https://imgur.com/vIn4uU6.jpg" class="img-responsive" />

6. Flip the board over and solder each leg of each resistor.<img src="https://imgur.com/hZYCPz1.jpg" class="img-responsive" />

7. Decide whether you're going to use female headers, stacking female headers, or if you're going to solder the Wemos directly to the level shifter shield PCB. I used single female headers so the Wemos would be removable, but still fairly low profile.<img src="https://imgur.com/6JNdDAL.jpg" class="img-responsive" />

8. I used double-sided male headers in a small breadboard to hold the female headers correctly aligned while I soldered.<img src="https://imgur.com/U1zIbwT.jpg.jpg" class="img-responsive" /><img src="https://imgur.com/uzUaqaK.jpg" class="img-responsive" /><img src="https://imgur.com/hjQToRx.jpg" class="img-responsive" />

9. Insert the power barrel jack.

10. Flip the PCB over and solder it in.

11. The pads are very large, and connected to large ground and power planes on the board, so they might take a while to heat up before the solder starts to flow around the leads.

12. Insert the large 1000uF capacitor, make sure the negative leg of the capacitor is in the negative labeled hole in the PCB.

13. Flip the board over and solder one leg, making sure the capacitor is properly aligned before soldering the other leg.

14. Trim all the leads with a pair of wire cutters. Flush diagonal cutters work best.

15. I use pre-assembled [3 pin JST-SM connectors](https://amzn.to/2CWBL1G) to connect the LEDs.

16. If possible, use a [PCB vise](https://www.thingiverse.com/thing:2801942) to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.

17. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.

18. Melt a fair amount of solder on the wire and pad. The insulation on the wire may start to melt as the wire heats up. If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

19. Repeat this process for the other wires.
    <img src="https://i.imgur.com/gOWXNq4.jpg" class="img-responsive" />
