---
layout: post
title: Mini Wi-Fi LED Controller
id: mini-wifi-led-controller
imgurId: SR0Gx51
excerpt: Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
categories: products
redirect_from:
  - /17
  - /wls2
---

<img src="https://i.imgur.com/gXRUp18.png" style="width:400px" class="img-responsive" />
<img src="https://i.imgur.com/OeFzvsb.png" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can by from our [Tindie](https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-level-shifter-mini-shield/) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer. It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for the Wemos D1 Mini (and D1 Mini Pro) ESP8266 board that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars). The Wemos D1 Mini is an excellent mini Wi-Fi development board, based on the ESP8266. I've used it extensively in development of addressable RGB LED art projects, such as my [6.5ft Rainbow Tree](https://www.evilgeniuslabs.org/tree-v2.html), [Bloom v2](bloom-v2.html), and [Ducenti](ducenti.html).

This is a smaller version of my [Wemos D1 Mini ESP8266 LED & Level Shifter Shield](/wifi-led-controller).

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes the slightly smaller 74HCT125 level shifter. It belongs to the same family as the 74HCT245, which is the most well-regarded high speed level shifter I've found. This shifts the 3.3V logic level of the ESP8266 to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't.

Four digital output pins (D5 - D8) are run through the level shifter. These pins support parallel output by the fantastic [FastLED library](https://github.com/FastLED/FastLED/wiki/Parallel-Output).

The shield also includes places for data line resistors as recommended when driving LEDs. Duplicate breakouts are included for each of the Wemos D1 mini pins. This shield omits the large 1000uF capacitor included on the larger shield, due to limited space. The large capacitor can be connected across the power and ground connections at the strip.

### Specifications

- Size: 1.02 x 1.10 x .063 inch (25.83 x 27.89 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA

Parts that are **not included**, but are required to assemble:

- [Wemos D1 Mini](https://www.aliexpress.com/store/product/D1-mini-Mini-NodeMcu-4M-bytes-Lua-WIFI-Internet-of-Things-development-board-based-ESP8266/1331105_32529101036.html)
- [SN74HCT125N Level Shifter](https://www.digikey.com/product-detail/en/texas-instruments/SN74HCT125N/296-8386-5-ND/376860)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5R5TA/399-9776-ND/3726028)
- [330 Ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

**Note**: Some WEMOS/LOLIN D1 Minis have the USB port on the top side, and some have it on the bottom side of the board.  Either way, ensure the the button is in the lower-left corner, and the pins labels match the shield PCB:
<img src="https://imgur.com/rnK7Fgp.png" class="img-responsive" />
<img src="https://imgur.com/5k8cjgR.png" class="img-responsive" />

1. Insert the SN74HCT125N Level Shifter chip into the holes in the top side of the board, where indicated, with the indentation towards the top edge of the board. <img src="https://imgur.com/MSNV5MO.png" class="img-responsive" />

2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly.

3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins.

4. Insert the 0.1uF capacitor, flip over and solder. <img src="https://imgur.com/BrdJJvZ.png" class="img-responsive" />

5. Insert a 300 Ohm to 500 Ohm resistor in each set of holes for each output you plan to use. Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically.
<img src="https://i.imgur.com/j57FbGf.jpg" class="img-responsive" />
<img src="https://imgur.com/Brr95O0.png" class="img-responsive" />

6. Flip the board over and solder each leg of each resistor.<img src="https://imgur.com/zwHDoCI.png" class="img-responsive" />

7. Decide whether you're going to use female headers, stacking female headers, or if you're going to solder the Wemos directly to the level shifter shield PCB. I used single female headers so the Wemos would be removable, but still fairly low profile.

8. I used double-sided male headers in a small breadboard to hold the female headers correctly aligned while I soldered.
<img src="https://imgur.com/ZhtHsED.png" class="img-responsive" />
<img src="https://imgur.com/tmc4eO2.png" class="img-responsive" />

9. Trim all the leads with a pair of wire cutters. Flush diagonal cutters work best.
<img src="https://imgur.com/GAS54Jz.png" class="img-responsive" />
<img src="https://imgur.com/3nx0UDM.png" class="img-responsive" />

10. I use pre-assembled [3 pin JST-SM connectors](https://amzn.to/2CWBL1G) to connect the LEDs.

11. If possible, use a [PCB vise](https://www.thingiverse.com/thing:2801942) to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.
<img src="https://imgur.com/CsfprPb.png" class="img-responsive" />
<img src="https://imgur.com/jnb0RZF.png" class="img-responsive" />
<img src="https://imgur.com/a80N2EM.png" class="img-responsive" />

12. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.
<img src="https://imgur.com/81kVy3S.png" class="img-responsive" />

14. Melt a fair amount of solder on the wire and pad. The insulation on the wire may start to melt as the wire heats up. If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

15. Repeat this process for the other wires.
<img src="https://imgur.com/drhrzFN.png" class="img-responsive" />
<img src="https://imgur.com/ljqBds6.png" class="img-responsive" />