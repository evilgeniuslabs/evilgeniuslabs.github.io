---
layout: post
title: Trinket Pro RGB LED Micro Quadrotor Race Gate
id: trinket-pro-rgb-led-micro-quadrotor-race-gate
imgurId: MQRllpA
videoUrl: https://www.youtube.com/embed/oqDBVKWO1fo
excerpt: RGB LED race gate for micro quadrotors, built with a Trinket Pro, 60 NeoPixel strip, PEX pipe, and FastLED.
categories: products
redirect_from:
  - /26
---

<img src="https://i.imgur.com/dEyjV1Y.gif" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/M060Hxu.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/HSkjbnz.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/zmIqoIu.jpg" style="width:200px" class="img-responsive" />

<img src="https://i.imgur.com/85bvJJx.jpg" style="width:200px" class="img-responsive" />

<img src="https://i.imgur.com/A0Yvsf7.jpg" style="width:200px" class="img-responsive" />

<img src="https://cdn.thingiverse.com/renders/f8/ed/ee/9c/ba/3ec0ad61792f36cfe7c1c4d2cdf18e0a_preview_featured.jpg" style="width:200px" class="img-responsive" />

<img src="https://cdn.thingiverse.com/renders/27/d8/c4/da/4a/4b48c1b7f89554a6538940d1ae34f603_preview_featured.jpg" style="width:200px" class="img-responsive" />

<img src="https://cdn.thingiverse.com/renders/78/40/ee/0b/7b/be7ae6fe4cd93af43c0285847f9d8735_preview_featured.jpg" style="width:200px" class="img-responsive" />

<img src="https://cdn.thingiverse.com/renders/c6/d3/27/b2/a4/f4a592a25b276b405fb03bf4e3512f37_preview_featured.jpg" style="width:200px" class="img-responsive" />

<img src="https://cdn.thingiverse.com/renders/db/24/a0/3d/ef/bd1338bca251a8ac002df68c9e0f0078_preview_featured.jpg" style="width:200px" class="img-responsive" />

<img src="https://cdn.thingiverse.com/renders/31/d9/49/e0/0b/b232e12274ce879c8db3f51317ed32a7_preview_featured.jpg" style="width:200px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/jasoncoon/trinket-pro-rgb-led-race-gate-controller/) store.

For free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer.  It takes a few weeks, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for [Adafruit Pro Trinket - 5V](https://www.adafruit.com/product/2000) that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), SK6812, etc. The Adafruit Pro Trinket - 5V is an excellent Arduino compatible development board based on the ATmega328.

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

No level shifter is required since the Trinket Pro 5V outputs the same 5 volt logic level that the LEDs require.

One digital output pin (D4) is run through a data line resistor, as recommended by [Adafruit's NeoPixel Best Practices](https://learn.adafruit.com/adafruit-neopixel-uberguide/best-practices).

The large 5V trace and GND pour should be rated for up to 2 amps.  That's enough for about 33 LEDs at max output (solid white, full brightness).  For larger quantities, power should be connected directly to the LEDs, and/or brightness should be limited in software.

### Specifications

- Size: 0.93 x 1.73 x .063 inch (23.6 x 43.8 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA
- Current Rating: 2A

Parts that are **not included**, but are required to assemble:

- [Adafruit Pro Trinket - 5V 16MHz](https://www.adafruit.com/product/2000)
- [Adafruit 60 NeoPixel RGB LED Strip](https://www.adafruit.com/product/1138)
- [470 ohm resistors](https://www.adafruit.com/product/2781)
- [Tactile Button switches (6mm)](https://www.adafruit.com/product/367)
- [3D printed case](https://www.thingiverse.com/thing:3200653)
- [3/4 in. x 10 ft. White PEX Pipe](https://www.homedepot.com/p/Apollo-3-4-in-x-10-ft-White-PEX-Pipe-APPW1034/301541221)
- [White floral foam](https://www.michaels.com/floracraft-styrofoam-block-white/M10102529.html)

Pipe fittings

- [3D printed 3/4 PEX fittings](https://www.thingiverse.com/thing:3200653)

OR

- [3/4 in. Plastic PEX Barb 90-Degree Elbow (5-Pack)](https://www.homedepot.com/p/Apollo-3-4-in-Plastic-PEX-Barb-90-Degree-Elbow-5-Pack-PXPAE345PK/301541108)
- [3/4 in. Plastic PEX Barb Tee (5-Pack)](https://www.homedepot.com/p/Apollo-3-4-in-Plastic-PEX-Barb-Tee-5-Pack-PXPAT345PK/301541249)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

### Code

Open source example Arduino sketch: [https://github.com/jasoncoon/demoreel100-buttons](https://github.com/jasoncoon/demoreel100-buttons)

Features:

* Adjustable brightness/power
* Choose animation/pattern

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

I used this [3D printed vise](https://www.thingiverse.com/thing:2801942) to hold the PCB while soldering.

I also built one of these [DIY flexible soldering helping hands](http://www.instructables.com/id/DIY-Flexible-Soldering-Helping-Hand/).

<img src="https://i.imgur.com/HkRdXLb.jpg" class="img-responsive" />

1. Insert the 300 Ohm to 500 Ohm resistor.

2. Flip the board over and solder each leg of the resistor.

3. Insert and solder the button pins.

4. Trim all the leads with a pair of wire cutters.  Flush diagonal cutters work best.

5. I used a pre-assembled [3 pin JST-SM connector](https://amzn.to/2CWBL1G) to connect the LEDs.

6. If possible, use a vise to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.
<img src="https://i.imgur.com/26X166P.jpg" class="img-responsive" />

7. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.

8. Melt a fair amount of solder on the wire and pad.  The insulation on the wire may start to melt as the wire heats up.  If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

9. Repeat this process for the other wires.

10. I used the Trinket to hold the female headers correctly aligned while I soldered.
<img src="https://i.imgur.com/A0Yvsf7.jpg" class="img-responsive" />
