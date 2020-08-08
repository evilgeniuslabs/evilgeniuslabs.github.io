---
layout: post
title: Trinket Pro RGB LED Race Gate Controller
id: trinket-pro-rgb-led-micro-quadrotor-race-gate
imgurId: mOL28YC
videoUrl: https://www.youtube.com/embed/oqDBVKWO1fo
excerpt: RGB LED race gate for micro quadrotors, built with a Trinket Pro, 60 NeoPixel strip, PEX pipe, and FastLED.
categories: products
redirect_from:
  - /26
---

<div class="row">
  <a href="https://i.imgur.com/LP60W0A" target="_blank"><img src="https://i.imgur.com/LP60W0A.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/KDue2cs.gif" target="_blank"><img src="https://i.imgur.com/KDue2cs.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/mOL28YC" target="_blank"><img src="https://i.imgur.com/mOL28YC.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/VLQ5fCV" target="_blank"><img src="https://i.imgur.com/VLQ5fCV.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/WNybN7b.mp4" target="_blank"><img src="https://i.imgur.com/V9kHfCS.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/M060Hxu.jpg" target="_blank"><img src="https://i.imgur.com/M060Hxu.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/HSkjbnz.jpg" target="_blank"><img src="https://i.imgur.com/HSkjbnz.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/sMUO99b.jpg" target="_blank"><img src="https://i.imgur.com/sMUO99b.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/JWSIr2c.jpg" target="_blank"><img src="https://i.imgur.com/JWSIr2c.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/9aP8yPQ.jpg" target="_blank"><img src="https://i.imgur.com/9aP8yPQ.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/HToMlpe.jpg" target="_blank"><img src="https://i.imgur.com/HToMlpe.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/Fvj1nbg.jpg" target="_blank"><img src="https://i.imgur.com/Fvj1nbg.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/VUIQWmk.jpg" target="_blank"><img src="https://i.imgur.com/VUIQWmk.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/NHmCcdx.jpg" target="_blank"><img src="https://i.imgur.com/NHmCcdx.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/aKOmQde.jpg" target="_blank"><img src="https://i.imgur.com/aKOmQde.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/A0Yvsf7.jpg" target="_blank"><img src="https://i.imgur.com/A0Yvsf7.jpg" class="col-sm-4 col-xs-12" /></a>
</div>

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/15344) store.

For free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer.  It takes a few weeks, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for [Adafruit Pro Trinket - 5V](https://www.adafruit.com/product/2000) that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), SK6812, etc. The Adafruit Pro Trinket - 5V is an excellent Arduino compatible development board based on the ATmega328.

No level shifter is required since the Trinket Pro 5V outputs the same 5 volt logic level that the LEDs require.

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

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
- [330 Ohm resistors](https://www.adafruit.com/product/2781)
- [Tactile Button switches (6mm)](https://www.adafruit.com/product/367)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

Optional parts:

- [3D printed case](https://www.thingiverse.com/thing:3200653)

### Race gates

See this post for more details on building the gates: https://www.evilgeniuslabs.org/rgb-led-micro-quadrotor-race-gate

### Code

Open source example Arduino sketch: [https://github.com/jasoncoon/demoreel100-buttons](https://github.com/jasoncoon/demoreel100-buttons)

Features:

* Adjustable brightness/power
* Choose animation/pattern

### Electronics Assembly Instructions

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
Â
7. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.

8. Melt a fair amount of solder on the wire and pad.  The insulation on the wire may start to melt as the wire heats up.  If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

9. Repeat this process for the other wires.

10. I used the Trinket to hold the female headers correctly aligned while I soldered.
<img src="https://i.imgur.com/A0Yvsf7.jpg" class="img-responsive" />

### Gate and Controller assembly

See this post for more details on building the gates: https://www.evilgeniuslabs.org/rgb-led-micro-quadrotor-race-gate

I designed and [3D printed a case for the Trinket Pro](https://www.thingiverse.com/thing:3200653).  I assembled the shield with female headers so the Trinket Pro could be removed, so the case is a bit bulky.  I plan to build more without the female headers, and will make a new lower profile case when I do.

I printed the case, lid, and two button pins.  The shield attaches to the case with small M3 screws.  The case can be attached to a flange/foot with M3 screws, by marking and drilling a small hole in the flange.  I'll likely end up combining the case and flange into one 3D printed part eventually.

I power each gate with a [cheap USB power bank](https://www.microcenter.com/product/488479/2600mah-power-bank---white).
