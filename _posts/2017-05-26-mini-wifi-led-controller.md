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

<img src="http://i.imgur.com/SR0Gx51.png" style="width:400px" class="img-responsive" />

<h3>Table of Contents</h3>

* TOC
{:toc}

### Buy

For fast shipping to the US, you can by from our [Tindie](https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-level-shifter-mini-shield/) store.

If we're out of stock on Tindie, or for free shipping worldwide, you can [contact us](/contact) to order and have them shipped to you directly from the PCB manufacturer.  It takes a bit longer, and they require PCBs be ordered in multiples of three.

### Details

This is a shield/breakout for the Wemos D1 Mini (and D1 Mini Pro) ESP8266 board that makes it easy to control addressable RGB LEDs, such as WS2811, WS2812 (Adafruit NeoPixels), and APA102 (Adafruit DotStars).  The Wemos D1 Mini is an excellent mini Wi-Fi development board, based on the ESP8266.  I've used it extensively in development of addressable RGB LED art projects, such as my [6.5ft Rainbow Tree](https://www.evilgeniuslabs.org/tree-v2.html), [Bloom v2](bloom-v2.html), and [Ducenti](ducenti.html).

This is a smaller version of my [Wemos D1 Mini ESP8266 LED & Level Shifter Shield](/wifi-led-controller).

I made this shield because I was hand-wiring this same layout on perma-proto boards, which was time-consuming and unprofessional looking.

The shield includes the slightly smaller 74HCT125 level shifter. It belongs to the same family as the 74HCT245, which is the most well-regarded high speed level shifter I've found. This shifts the 3.3V logic level of the ESP8266 to the 5V expected by addressable RGB LEDs. These projects often work fine without a level shifter, until they don't.

Four digital output pins (D5 - D8) are run through the level shifter.  These pins support parallel output by the fantastic [FastLED library](https://github.com/FastLED/FastLED/wiki/Parallel-Output).

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

- [Wemos D1 Mini Pro & Headers](https://www.aliexpress.com/item/WEMOS-D1-mini-Pro-16M-bytes-external-antenna-connector-ESP8266-WIFI-Internet-of-Things-development-board/32724692514.html)
- [SN74HCT125N Level Shifter](https://www.digikey.com/product-detail/en/texas-instruments/SN74HCT125N/296-8386-5-ND/376860)
- [0.10µF Capacitor](https://www.digikey.com/product-detail/en/kemet/C320C104M5U5TA/399-4266-ND/818042)
- [470 ohm resistors](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT470R/CF14JT470RCT-ND/1830342)

### More Information

For assembly instructions, example code, and more information, please see [Wemos D1 Mini ESP8266 LED & Level Shifter Shield](/wifi-led-controller).
