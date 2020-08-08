---
layout: post
title: SMD Mini Six Output ESP8266 Wi-Fi RGB LED Controller
id: smd-mini-six-output-esp8266-wi-fi-rgb-led-controller
imgurId: w4jhZna
excerpt: Six output, surface mount assembled, Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
categories: products
published: true
redirect_from:
  - /33
---

<img src="https://i.imgur.com/8GPEIL6.png" style="width:265px" class="img-responsive" />

<img src="https://i.imgur.com/To5U8Vj.png" style="width:340px" class="img-responsive" />

<img src="https://i.imgur.com/bn1Ht27.png" style="width:340px" class="img-responsive" />

<img src="https://i.imgur.com/ZyC9DNj.png" style="width:265px" class="img-responsive" />

<img src="https://i.imgur.com/Wmrtrow.png" style="width:265px" class="img-responsive" />

<img src="https://i.imgur.com/kvh0ild.png" style="width:265px" class="img-responsive" />

<img src="https://i.imgur.com/I0XMeOz.png" style="width:265px" class="img-responsive" />

<h3>Table of Contents</h3>

- TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/19174) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer. They won't come with SMD components, it takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for the Wemos D1 Mini (and D1 Mini Pro) ESP8266 development board, with assembled SMD parts, that makes it easy to control six sets of addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars), in parallel. The Wemos D1 Mini is an excellent mini Wi-Fi development board, based on the ESP8266. I've used it extensively in development of addressable RGB LED art projects, such as my [6.5ft Rainbow Tree](https://www.evilgeniuslabs.org/tree-v2.html), [Bloom v2](bloom-v2.html), and [Ducenti](ducenti.html).

This is a smaller version of my [Six output Wemos D1 Mini ESP8266 LED & Level Shifter Shield](/hex-wemos-d1-mini-wifi-led-controller).

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a surface mounted 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found. This shifts the 3.3V logic level of the ESP8266 to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't. A surface mounted 0.1uF decoupling capacitor is also included.

Six digital output pins (D1, D2, D5, D6, D7, D8) are run through the level shifter. These pins support parallel output by the fantastic [FastLED library](https://github.com/FastLED/FastLED/wiki/Parallel-Output).

The shield also includes six surface mounted data line resistors as recommended when driving LEDs. Duplicate breakouts are included for each of the Wemos D1 mini pins. This shield omits the large 1000uF capacitor included on the larger shield, due to limited space. The large capacitor can be connected across the power and ground connections at the strip.

### Specifications

- Size: 1.02 x 1.10 x .063 inch (25.83 x 27.89 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Green SMOBC (solder mask over bare copper)
- LeadFree HASL (Hot Air Solder Leveling) RoHS (Restriction of Hazardous Substances) Compliant
- Designed in the USA

Parts that are **not included**, but are required to assemble:

- [Wemos D1 Mini and headers](https://www.aliexpress.com/store/product/D1-mini-Mini-NodeMcu-4M-bytes-Lua-WIFI-Internet-of-Things-development-board-based-ESP8266/1331105_32529101036.html)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

**Note**: Some WEMOS/LOLIN D1 Minis have the USB port on the top side, and some have it on the bottom side of the board. Either way, ensure the the button is in the lower-left corner, and the pins labels match the shield PCB:
<img src="https://imgur.com/rnK7Fgp.png" class="img-responsive" />
<img src="https://imgur.com/5k8cjgR.png" class="img-responsive" />

1. Decide whether you're going to use female headers, stacking female headers, or if you're going to solder the Wemos directly to the level shifter shield PCB. I used single female headers so the Wemos would be removable, but still fairly low profile.

2. I used double-sided male headers in a small breadboard to hold the female headers correctly aligned while I soldered.
   <img src="https://imgur.com/BTKr4U0.png" class="img-responsive" />
   <img src="https://imgur.com/j3IKfpJ.png" class="img-responsive" />

3. Trim all the leads with a pair of wire cutters. Flush diagonal cutters work best.

4. I use pre-assembled [3 pin JST-SM connectors](https://amzn.to/2CWBL1G) to connect the LEDs.

5. If possible, use a [PCB vise](https://www.thingiverse.com/thing:2801942) to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.
   <img src="https://imgur.com/qsS4bi4.png" class="img-responsive" />

6. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.

7. Melt a fair amount of solder on the wire and pad. The insulation on the wire may start to melt as the wire heats up. If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

8. Repeat this process for the other wires.
   <img src="https://imgur.com/usCMGwI.png" class="img-responsive" />
   <img src="https://imgur.com/ZyC9DNj.png" class="img-responsive" />
