---
layout: post
title: Four and Eight Channel Level Shifter Breakouts
id: four-and-eight-channel-level-shifter-breakouts
imgurId: w4jhZna
excerpt: Four and eight channel level shifter breakouts for driving addressable RGB LEDs.
categories: products
published: false
redirect_from:
  - /31
---

<img src="https://i.imgur.com/w4jhZna.png" style="width:340px" class="img-responsive" />

<img src="https://i.imgur.com/yC4nscY.png" style="width:340px" class="img-responsive" />

<img src="https://i.imgur.com/TwSkOY7.png" style="width:265px" class="img-responsive" />

<img src="https://i.imgur.com/HmgnFRA.png" style="width:265px" class="img-responsive" />

<h3>Table of Contents</h3>

- TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/18459) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer. It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

These are breakouts for the Texas Instruments 74HCT level shifter chips. They make it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars). These chips are the most highly-regarded level shifters, and the only ones tested to always work with clockless addressable RGB LEDs. I've used them extensively in development of addressable RGB LED art projects, such as my [6.5ft Rainbow Tree](https://www.evilgeniuslabs.org/tree-v2.html), [Bloom v2](bloom-v2.html), and [Ducenti](ducenti.html). These breakouts support 4x and 8x parallel output on a wide variety of microcontrollers supported by the FastLED library.

I made these breakouts because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking. I get requests to make boards/kits for a lot of microcontrollers, and I can't always justify the time and expense involved in designing, ordering, testing, stocking, etc for every microcontroller development board variation.

The 4x breakout includes a 74HCT125 level shifter, and the 8x breakout includes a 74HCT245 level shifter, both of which are the most well-regarded high speed level shifters I've found. These shift the 3.3V logic level of most modern microcontrollers to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't.

Four and eight pins are run through the level shifter. These support parallel output by the fantastic [FastLED library](https://github.com/FastLED/FastLED/wiki/Parallel-Output).

The breakouts also include data line resistors and large 1000uF capacitors, as recommended when driving LEDs, especially when powering the microcontroller from the same power supply as a large number of LEDs.

The 90 mil, double-sided 5V and GND traces should be rated for up to ~12 amps. That's enough for about 200 LEDs at max output (solid white, full brightness), and much more than 200 LEDs at lower output, lower brightness, and/or multicolor patterns. A barrel connector can be added to connect a power supply, but most are only rated for 2.5A (~50 LEDs at max output). For larger quantities, power should be connected to the PCB directly with large gauge wire, connected directly to the LEDs, and/or brightness should be limited in software. It is very important when using high current power supplies and large numbers of LEDs to watch for overheating on wiring, connectors, components, and the PCB.

### Specifications

- Size:
  - Four channel: 1.06 x 1.01 x .063 inch (26.9 x 25.6 x 1.6 mm)
  - Eight channel: 1.36 x 1.01 x .063 inch (34.5 x 25.6 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA
- Current Rating: 12A

Parts that are **not included**, but are required to assemble:

- Level Shifter:
  - Four channel: [SN74HCT125N Level Shifter](https://www.digikey.com/product-detail/en/texas-instruments/SN74HCT125N/296-8386-5-ND/376860)
  - Eight channel: [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
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

Following the best practice recommendations of using a fast level shifter, large capacitor, and resistors on the clock and data lines was resulting in a lot of wires on a large perma-proto board. I decided to design a PCB to make it cleaner and more compact.

It's much smaller and easier to assemble, compared to the perma-proto boards I was building:

<img src="/images/tree-v2-board.jpg" style="width:400px" class="img-responsive" />

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

1. Insert the Level Shifter chip into the holes in the top side of the board, where indicated, with the indentation towards the left edge of the board. <img src="https://imgur.com/Ez9cXED.jpg" class="img-responsive" />
<img src="https://imgur.com/TM6OXFC.jpg" class="img-responsive" />

2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly.

3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins.

4. Insert the 0.1uF capacitor, flip over and solder. <img src="https://imgur.com/Ey5xiq3.png" class="img-responsive" />
<img src="https://imgur.com/u6cM9sh.png" class="img-responsive" />

5. Insert a 300 Ohm to 500 Ohm resistor in each set of holes for each output you plan to use. Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically.<img src="https://imgur.com/7EGahcY.png" class="img-responsive" />
<img src="https://imgur.com/vLrAEy6.png" class="img-responsive" />

6. Flip the board over and solder each leg of each resistor.<img src="https://imgur.com/3R9LFoa.png" class="img-responsive" />
<img src="https://imgur.com/qxkbv2j.png" class="img-responsive" />

7. Insert the power barrel jack.

8. Flip the PCB over and solder it in.

9. The pads are very large, and connected to large ground and power planes on the board, so they might take a while to heat up before the solder starts to flow around the leads.
<img src="https://imgur.com/TyPpH4b.png" class="img-responsive" />

10. Insert the large 1000uF capacitor, make sure the negative leg of the capacitor is in the negative labeled hole in the PCB.

11. Flip the board over and solder one leg, making sure the capacitor is properly aligned before soldering the other leg.

12. Trim all the leads with a pair of wire cutters. Flush diagonal cutters work best.

13. I use pre-assembled [3 pin JST-SM connectors](https://amzn.to/2CWBL1G) to connect the LEDs.

14. If possible, use a [PCB vise](https://www.thingiverse.com/thing:2801942) to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.
<img src="https://imgur.com/xcbssd4.png" class="img-responsive" />
<img src="https://imgur.com/8ZGhc7M.png" class="img-responsive" />
<img src="https://imgur.com/ubfHZkL.png" class="img-responsive" />
<img src="https://imgur.com/xuQTFWw.png" class="img-responsive" />
<img src="https://imgur.com/OBeXEJQ.png" class="img-responsive" />
<img src="https://imgur.com/qYG9cjs.png" class="img-responsive" />

15. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.

16. Melt a fair amount of solder on the wire and pad. The insulation on the wire may start to melt as the wire heats up. If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

17. Repeat this process for the other wires.
<img src="https://imgur.com/wNDM8c7.png" class="img-responsive" />
