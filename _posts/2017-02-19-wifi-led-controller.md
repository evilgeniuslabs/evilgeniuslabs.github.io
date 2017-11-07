---
layout: post
title: Wi-Fi LED Controller
id: wifi-led-controller
imgurId: TTtKvaG
excerpt: Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
categories: products
redirect_from:
  - /15
---

<img src="/images/wifi-led-controller/pcb-render-top.png" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-led-and-level-shifter-shield) store.

For fast shipping from the UK, you can buy from [PureTek](http://www.ebay.co.uk/itm/Evil-Genius-Labs-Wemos-D1-Mini-ESP8266-LED-Level-Shifter-Shield-/272670862672).

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer.  It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for the Wemos D1 Mini (and D1 Mini Pro) ESP8266 board that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars).  The Wemos D1 Mini is an excellent mini Wi-Fi development board, based on the ESP8266.  I've used it extensively in development of addressable RGB LED art projects, such as my [6.5ft Rainbow Tree](https://www.evilgeniuslabs.org/tree-v2.html), [Bloom v2](bloom-v2.html), and [Ducenti](ducenti.html).

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found.  This shifts the 3.3V logic level of the ESP8266 to the 5V expected by addressable RGB LEDs.  These projects often work fine without a level shifter, until they don't.  The shield also includes data line resistors and a large 1000uF capacitor, as recommended when driving LEDs, especially when powering the microcontroller from the same power supply as a large number of LEDs.  The shield also includes a port for easily adding an IR receiver.

Four digital output pins (D5 - D8) are run through the level shifter.  These pins support parallel output by the fantastic [FastLED library](https://github.com/FastLED/FastLED/wiki/Parallel-Output).

### Assembly Options

The board can be assembled in a very low profile configuration (about 10mm thick) by soldering the Wemos directly to the PCB with only male headers, and by mounting the large capacitor to the side:

<img src="http://i.imgur.com/7h14bR3.jpg" style="width:400px" class="img-responsive" />

Alternatively, female headers can be used to allow easy removal of the Wemos microcontroller.  This results in about 18mm of thickness.

Stacking female headers can be used, which allows plugging other Wemos shields directly on top and/or bottom.  This adds another 8mm to 16mm of thickness.

<img src="http://i.imgur.com/x41cioC.jpg" style="width:400px" class="img-responsive" />

I also designed a 3D printed enclosure for it.  It provides access to the wiring for the LEDs, IR receiver, reset button, and Micro USB connector.

<img src="http://i.imgur.com/KxmFRfz.jpg" style="width:400px" class="img-responsive" />

The shields and enclosures are available in our store on [Tindie](https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-led-and-level-shifter-shield).

### Specifications

- Size: 1.64 x 1.56 x .063 inch (41.61 x 39.52 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA

Parts that are **not included**, but are required to assemble:

- [Wemos D1 Mini Pro & Headers](https://www.aliexpress.com/item/WEMOS-D1-mini-Pro-16M-bytes-external-antenna-connector-ESP8266-WIFI-Internet-of-Things-development-board/32724692514.html)
- [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
- [1000µF Capacitor](http://www.digikey.com/product-detail/en/panasonic-electronic-components/ECA-1EM102/P5156-ND/245015)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5U5TA/399-4266-ND/818042)
- [470 ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT470R/CF14JT470RCT-ND/1830342)

### Background

All of my projects lately have been driven by ESP8266 microcontrollers with Wi-Fi support.  Following the best practice recommendations of using a fast level shifter, large capacitor, and resistors on the clock and data lines was resulting in a lot of wires on a large perma-proto board.  I decided to design a PCB to make it cleaner and more compact.

It's much smaller and easier to assemble, compared to the perma-proto boards I was building:

<img src="/images/tree-v2-board.jpg" style="width:400px" class="img-responsive" />

After trying a lot of different ESP8266 boards, I've found the [Wemos D1 Mini Pro](https://www.wemos.cc/product/d1-mini-pro.html) to be great for the price.  It includes an improved CP2104 USB-TO-UART adapter for more reliable, high-speed firmware and SPIFFs updates, larger (16MB) flash storage, etc.

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/esp8266-fastled-webserver](https://github.com/jasoncoon/esp8266-fastled-webserver)

<img src="https://github.com/jasoncoon/esp8266-fastled-webserver/raw/master/webapp.png" style="width:300px" class="img-responsive" />

Features:

* Control via a web app over Wi-Fi
* Control via an infrared (wireless) remote control
* On/Off
* Adjustable brightness
* Choose animation/pattern
* Choose color palette
* Set to any solid color
* Autoplay patterns with adjustable duration

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

1. Insert the SN74HCT245N Level Shifter chip into the holes in the top side of the board, where indicated, with the indentation towards the bottom edge of the board. <img src="http://imgur.com/4NfZJu8.jpg" class="img-responsive" />
2. Flip the board over and solder one pin on the chip, pressing down on the PCB to ensure the chip is seated firmly. <img src="http://imgur.com/RKSk0Ww.jpg" class="img-responsive" />
3. Make sure the chip is still seated properly before proceeding to solder the rest of the pins. <img src="http://imgur.com/xiaarAj.jpg" class="img-responsive" />
4. If you have a v1.0 or older PCB, if your PCB does not have a version number, or if this spot is labeled 'jumper or 0.1uF', you **must** use a jumper wire instead of a capacitor.

   If you have a v1.1 or newer PCB, or if this spot is labeled '0.1uF', you can either leave it empty or use a 0.1uF capacitor.<img src="http://imgur.com/ft608YT.jpg" class="img-responsive" />
5. Insert a 300 Ohm to 500 Ohm resistor in each set of holes for each output you plan to use.  Bend one leg 180 degrees around, flat against the resistor body, and insert it vertically.<img src="http://imgur.com/VHDGTzv.jpg" class="img-responsive" />
6. Flip the board over and solder each leg of each resistor.<img src="http://imgur.com/x5Wd6Wk.jpg" class="img-responsive" />
7. Decide whether you're going to use female headers, stacking female headers, or if you're going to solder the Wemos directly to the level shifter shield PCB.  I used single female headers so the Wemos would be removable, but still fairly low profile.<img src="http://imgur.com/LIUZL8t.jpg" class="img-responsive" />
8. I used double-sided male headers in a small breadboard to hold the female headers correctly aligned while I soldered.<img src="http://imgur.com/U1zIbwT.jpg.jpg" class="img-responsive" /><img src="http://imgur.com/uzUaqaK.jpg" class="img-responsive" /><img src="http://imgur.com/oqrcZzy.jpg" class="img-responsive" /><img src="http://imgur.com/1DoksKR.jpg" class="img-responsive" />
9. Insert the large 1000uF capacitor, make sure the negative leg of the capacitor is in the negative labeled hole in the PCB.<img src="http://imgur.com/WPEPwba.jpg" class="img-responsive" /><img src="http://imgur.com/Ijmnx6N.jpg" class="img-responsive" />
10. Flip the board over and solder one leg, making sure the capacitor is properly aligned before soldering the other leg.<img src="http://imgur.com/5aQLHi7.jpg" class="img-responsive" />
11. Trim all the leads with a pair of wire cutters.  Flush diagonal cutters work best.
12. To attach male headers to the Wemos board, you can either use the shield PCB or a breadboard to keep them correctly aligned.<img src="http://imgur.com/uLzEBg1.jpg" class="img-responsive" /><img src="http://imgur.com/3XDmGXI.jpg" class="img-responsive" />
13. Solder all of the pins, taking care to keep the soldering iron away from the components on the Wemos board.<img src="http://imgur.com/7qBrq0U.jpg" class="img-responsive" />
14. Strip the ends of the wires you'll use to connect the LEDs.<img src="http://imgur.com/QSpwkNV.jpg" class="img-responsive" />  I left the wires on the spools, which makes it easier to handle.  I used a third hand tool to hold the PCB, since this part requires both hands free.<img src="http://imgur.com/qe6YJo2.jpg" class="img-responsive" />
15. With a small amount of solder on the tip of the iron, heat the wire right on the bottom of the pad.<img src="http://imgur.com/fbp3dCC.jpg" class="img-responsive" />
16. Melt a fair amount of solder on the wire and pad.  The insulation on the wire may start to melt as the wire heats up.  If so, push the wire through the hole, from the top towards the bottom, to ensure no wire is left exposed on top.<img src="http://imgur.com/OKdiUUU.jpg" class="img-responsive" /><img src="http://imgur.com/kK5PD17.jpg" class="img-responsive" />
17. Repeat this process for the other wires.<img src="http://imgur.com/tWxcq4m.jpg" class="img-responsive" />
18. Cut the wires to the desired length and add [JST-SM connectors](https://www.amazon.com/gp/product/B00VG14BSE) using a [SN-48B Crimping Tool](https://www.amazon.com/Crimping-26-16AWG-0-14-1-5mm%C2%B2-Connectors-Terminals/dp/B00OMMZ502).
