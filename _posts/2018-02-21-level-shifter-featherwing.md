---
layout: post
title: Level Shifter FeatherWing
id: level-shifter-featherwing
imgurId: rdqYNG6
excerpt: Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
categories: products
redirect_from:
  - /20
---

<img src="https://i.imgur.com/jz8J5P8.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/cDRWBta.jpg" style="width:400px" class="img-responsive" />

<img src="https://i.imgur.com/XaLZdW2.jpg" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can buy from our [Tindie](https://www.tindie.com/products/jasoncoon/octo-level-shifter-featherwing/) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer.  It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a FeatherWing (shield/breakout) for [Adafruit Feather Boards](https://www.adafruit.com/category/777) that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars).  The [Adafruit ESP32 Feather](https://www.adafruit.com/product/3405) is an excellent mini Wi-Fi development board, based on the ESP32.

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes a 74HCT245 level shifter, which is the most well-regarded high speed level shifter I've found.  This shifts the 3.3V logic level of the ESP32 to the 5V expected by addressable RGB LEDs.  These projects often work fine without a level shifter, until they don't.

Eight digital output pins (12, 13, 14, 15, 27, 32, 33, SCL) are run through the level shifter.

The shield also includes places for data line resistors as recommended when driving LEDs. A large capacitor should be connected across the power and ground connections near the LEDs.

### Specifications

- Size: 2.00 x 0.90 x .063 inch (48.3 x 73.4 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Lead free
- Purple SMOBC (solder mask over bare copper)
- ENIG (Electroless Nickel Immersion Gold) finish
- Manufactured in the USA

Parts that are **not included**, but are required to assemble:

- [Adafruit ESP32 Feather Board](https://www.adafruit.com/product/3405)
- [12-pin and 16-pin Female Header Set](https://www.adafruit.com/product/2886)
- [SN74HCT245N Level Shifter](http://www.digikey.com/product-detail/en/texas-instruments/SN74HCT245N/296-1612-5-ND/277258)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5U5TA/399-4266-ND/818042)
- [470 ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT470R/CF14JT470RCT-ND/1830342)

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

### More Information

For assembly instructions, example code, and more information, please see [Wemos D1 Mini ESP8266 LED & Level Shifter Shield](/wifi-led-controller).
