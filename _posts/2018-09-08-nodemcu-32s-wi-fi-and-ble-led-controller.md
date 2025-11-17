---
layout: post
title: NodeMCU-32S Wi-Fi and BLE LED Controller
sortKey: NodeMCU-32S Wi-Fi and BLE LED Controller
id: nodemcu-32s-shield
imgurId: 2mjwnIJ.mp4
excerpt: Wi-Fi and BLE controlled, Arduino-compatible addressable RGB LED controller based on the NodeMCU-32S, with level shifter.
categories: retired
redirect_from:
  - /24
---

<img src="/assets/jT7bq4S.jpg" style="width:400px" class="img-responsive" />

<img src="/assets/2mjwnIJ.jpg" style="width:400px" class="img-responsive" />

<img src="/assets/xSwN6sy.jpg" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

- TOC
{:toc}

### Buy

For free shipping worldwide, you can order directly from OSH Park: [https://oshpark.com/shared_projects/hL0Bna7M](https://oshpark.com/shared_projects/hL0Bna7M)

### Details

This is a shield/breakout for [NodeMCU-32S Board](https://amzn.to/2MWrCrk) that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), SK6812, APA102 (Adafruit DotStars), and SK9822. The NodeMCU-32S Board is an excellent Wi-Fi and Bluetooth development board based on the ES32. This shield supports 8x parallel output.

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found. This shifts the 3.3V logic level of the ESP32 to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't.

Eight digital output pins (0, 2, 4, 12, 13, 15, 16, 17) are run through the level shifter.

The shield also includes places for data line resistors as recommended when driving LEDs. A large capacitor should be connected across the power and ground connections near the LEDs. A barrel connector can be added to connect a power supply, but the connector and PCB are only rated for 2.5A. That's enough for about 50 LEDs at solid white, full brightness. For larger quantities, power should be connected directly to the LEDs, and/or brightness should be limited in software.

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

- [NodeMCU-32S Board](https://amzn.to/2MWrCrk)
- [(2) 19-pin Female Headers](https://www.digikey.com/product-detail/en/PPTC191LFBN-RC/S7017-ND/810157/?itemSeq=269091451)
- [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5U5TA/399-4266-ND/818042)
- [(8) 330 Ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730)
- [Power Barrel Connector Jack](https://www.digikey.com/product-detail/en/cui-inc/PJ-102A/CP-102A-ND/275425)

Wire/Connectors

- [Pre-Wired JST SM Connectors](https://amzn.to/2P6qYEN)

OR

- [JST-SM connectors](https://amzn.to/2P7cvJ1)
- [SN-48B Crimping Tool](https://amzn.to/2P6YpHh)
- 22 AWG Wire

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/esp32-fastled-webserver](https://github.com/jasoncoon/esp32-fastled-webserver)

<img src="/assets/ks1Zyfa.jpg" style="width:600px" class="img-responsive" />

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

1. Insert the SN74HCT245N Level Shifter chip into the holes in the top side of the board, where indicated. Be sure the notch is correctly aligned toward the 0.1uF capacitor, as indicated with the markings on the PCB.

<img src="/assets/eWWlZjD.jpg" class="img-responsive" />

2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly.

3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins.

4. Insert the 0.1uF capacitor, flip over and solder.

<img src="/assets/6CL4RwZ.jpg" class="img-responsive" />

5. Insert 300 Ohm to 500 Ohm resistors in each set of holes for each output you plan to use. Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically.

<img src="/assets/j57FbGf.jpg" class="img-responsive" />

6. Flip the board over and solder each leg of each resistor.

<img src="/assets/oRzHNX6.jpg" class="img-responsive" />

<img src="/assets/3CnX3MX.jpg" class="img-responsive" />

7. Trim all the leads with a pair of wire cutters. Flush diagonal cutters work best.

8. Insert the power barrel jack.

<img src="/assets/DhTB9Jt.jpg" class="img-responsive" />

9. I used a twist tie through the corner mounting holes to hold it in while I flipped the PCB over and soldered it in.

<img src="/assets/xMlnCuQ.jpg" class="img-responsive" />

10. The pads are very large, and connected to large ground and power planes on the board, so they might take a while to heat up before the solder starts to flow around the leads.

<img src="/assets/PlBhEe5.jpg" class="img-responsive" />

11. I use pre-assembled [3 pin JST-SM connectors](https://amzn.to/2CWBL1G) to connect the LEDs.

<img src="/assets/Qg0ikxA.jpg" class="img-responsive" />

12. If possible, use a vise to hold the PCB vertically, and a helping hands tool to hold the wires as they're soldered.

<img src="/assets/QmyMrN8.jpg" class="img-responsive" />

<img src="/assets/YnxsDwQ.jpg" class="img-responsive" />

13. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.

14. Melt a fair amount of solder on the wire and pad. The insulation on the wire may start to melt as the wire heats up. If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.

15. Repeat this process for the other wires.

<img src="/assets/80KyNTS.jpg" class="img-responsive" />

17. I used the NodeMCU-32S to hold the female headers correctly aligned while I soldered.

<img src="/assets/lQHpR5x.jpg" class="img-responsive" />
