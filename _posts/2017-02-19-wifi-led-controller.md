---
layout: post
title: Wi-Fi LED Controller
id: wifi-led-controller
imgurId: TTtKvaG
excerpt: Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
categories: products
---

<img src="/images/wifi-led-controller/pcb-render-top.png" style="width:400px" class="img-responsive" />

### Buy

For fast shipping to the US, you can by from our [Tindie](https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-led-and-level-shifter-shield) store.

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

- [Wemos D1 Mini Pro](https://www.aliexpress.com/item/WEMOS-D1-mini-Pro-16M-bytes-external-antenna-connector-ESP8266-WIFI-Internet-of-Things-development-board/32724692514.html)
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
