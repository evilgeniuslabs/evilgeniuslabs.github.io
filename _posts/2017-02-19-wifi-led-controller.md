---
layout: post
title: Wi-Fi LED Controller
imgurId: x41cioC
id: wifi-led-controller
excerpt: Wi-Fi controlled, Arduino-compatible addressable RGB LED controller based on the ESP8266, with level shifter.
---

<a class="btn btn-default" href="https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-led-and-level-shifter-shield">Buy on Tindie</a>

All of my projects lately have been driven by ESP8266 microcontrollers with Wi-Fi support.  Following the best practice recommendations of using a fast level shifter, large capacitor, and resistors on the clock and data lines was resulting in a large mess of jumper wires on a perma-proto board.  I decided to design a PCB to make it cleaner and more compact.

<img src="http://i.imgur.com/x41cioC.jpg" style="width:400px" class="img-responsive" />

It's much smaller and easier to assemble, compared to the perma-proto boards I was building:

<img src="/images/tree-v2-board.jpg" style="width:400px" class="img-responsive" />

After trying a lot of different ESP8266 boards, I've found the [Wemos D1 Mini Pro](https://www.wemos.cc/product/d1-mini-pro.html) to be great for the price.  It includes an improved CP2104 USB-TO-UART adapter for more reliable, high-speed firmware and SPIFFs updates, larger (16MB) flash storage, etc.

I've used this PCB in my last few projects, including [Tree v2](tree-v2.html), [Bloom v2](bloom-v2.html), [Ducenti](ducenti.html), etc.

I also designed a 3D printed enclosure for it.  It provides access to the wiring for the LEDs, IR receiver, reset button, and Micro USB connector.

<img src="http://i.imgur.com/KxmFRfz.jpg" style="width:400px" class="img-responsive" />

The shields and enclosures are now available on Tindie: [https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-led-and-level-shifter-shield](https://www.tindie.com/products/jasoncoon/wemos-d1-mini-esp8266-led-and-level-shifter-shield)

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
