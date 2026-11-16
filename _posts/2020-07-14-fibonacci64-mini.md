---
layout: post
title: Fibonacci64 Mini
id: fibonacci64mini
imgurId: awvYf9L.mp4
# videoUrl: https://www.youtube.com/embed/SNB5xsYFCak
excerpt: Fibonacci64 Mini is a beautiful 64mm circular disc with 64 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories:
  - portfolio
  - retired
published: true
redirect_from:
  - /37
  - /f64mini
  - /f64m
sortKey: Fibonacci0064 Mini
gallery:
  - src: "/assets/KyoG8de.jpg"
  - src: "/assets/zQLNbVo.jpg"
  - src: "/assets/fugZY8I.jpg"
  - src: "/assets/kfN64ue.jpg"
  - src: "/assets/ZN5ZZFs.jpg"
  - src: "/assets/4kxnxUJ.jpg"
  - src: "/assets/fv6uFPp.jpg"
---

<!-- <a href="/assets/awvYf9L.mp4" target="_blank"><video class="lazy" style="width:340px" data-src="/assets/awvYf9L.mp4" autoplay muted loop playsinline></video></a> -->

---

**Retired**

Alternatives:

- [Fibonacci64 Micro HDR](/fibonacci64-micro-hdr)
- [Fibonacci64 50mm](/fibonacci64-goggles)
- [One Inch Fibonacci64](/one-inch-fibonacci64)

---

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci64 Mini is a beautiful 64mm circular disc with 64 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It consists of 64 WS2812B-Mini 3535 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

{% include fermat-spiral.html %}

---

<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-body">
        <a href="https://photos.app.goo.gl/bwvDcZ96je8k7SoZ8" target="_blank">More pictures and details:</a>
      </div>
      <a href="https://photos.app.goo.gl/bwvDcZ96je8k7SoZ8" target="_blank">
        <img src="/assets/iLaweEn.jpg" style="width:340px" class="img-fluid post-img" />
      </a>
    </div>
  </div>
</div>

### Connecting

Instructions for connecting to a Fibonacci, pre-assembled or programmed with the [ESP8266-FastLED-WebServer](https://github.com/jasoncoon/esp8266-fastled-webserver/tree/fibonacci64) code:

1. Peel and remove any plastic film and/or paper from the acrylic front and back. This was left on to protect your Fibonacci’s acrylic during shipping.
1. Connect the MicroUSB port with a cable to a USB port, power adapter, etc.
1. Once powered on, it will create a WiFi network named `Fibonacci64-XXXX`, where XXXX are four letters/numbers unique to your Fibonacci. Please note this name for step 7 below.
1. Connect to this network with a phone, laptop, etc. You should get redirected, or prompted to sign in.
1. In the WiFi Manager page, click `Configure WiFi`.
1. Choose your WiFi network from the list, or enter its SSID manually, if needed. Enter your network's password. Click Save.
1. It will save, restart, and your device (phone, laptop, etc) should reconnect to your WiFi network. Do so manually, if needed.
1. On your device, browse to https://discover.evilgeniuslabs.org/. You should see your Fibonacci listed. Click it's `IP Address` link.
1. You should now be able to control your Fibonacci via the web page.
1. If this does not work, you may need to consult your WiFI AP/router documentation to find your Fibonacci’s IP address, or contact me for assistance.

### Specifications

- Size: 2.54 x 2.54 x .063 inch (64.6 x 64.6 mm x 1.6mm)
- 2 layer printed circuit board
- FR4 substrate
- Green SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) Finish
- Designed in the US by Evil Genius Labs
- Some PCBs are manufactured in the US by [OSH Park](https://oshpark.com) in their [After Dark](https://docs.oshpark.com/services/afterdark) (clear soldermask on a black substrate for stylish boards) finish!
- Some are assembled in the US by Evil Genius Labs

**Parts**

**Includes only the printed circuit board with LEDs**, does not include parts that are required to assemble and run it (microcontroller, power supply, wires, etc).

Parts that are **not included**, but are required to assemble and use:

- Microcontroller (Arduino, ESP8266, ESP32, etc):
  - [Pixelblaze](https://www.bhencke.com/pixelblaze) by [ElectroMage](https://electromage.com)
- Power supply, or run off of USB power from microcontroller.
- Wires, connectors, crimp tool, etc.
- Soldering iron, solder, etc.

Parts I used in my builds (also **not included**):

- [Wemos D1 Mini ESP8266 Level Shifter Mini Shield Kit](https://oshpark.com/shared_projects/6tHcl6u3).
- USB power from microcontroller, with [FastLED's power management](https://github.com/FastLED/FastLED/wiki/Power-notes#managing-power-in-fastled) to limit the maximum brightness and keep total current draw under 2A.
- [Dupont Connector Pins](https://amzn.to/2IiN84D)
- [Dupont Connector Housings](https://amzn.to/39pjZRk)
- [Dupont Crimper Tool](https://amzn.to/3cy1z2P)
- [24AWG Stranded Wire](https://amzn.to/2wpw1vj)
- [90 Degree Header Pins](https://amzn.to/2TnyDmx)

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/esp8266-fastled-webserver/tree/fibonacci64](https://github.com/jasoncoon/esp8266-fastled-webserver/tree/fibonacci64)

<img src="/assets/esp8266-fastled-webserver-web-app.png" style="width:300px" class="img-fluid post-img" />

### Pixelblaze Map

[Pixelblaze](https://www.bhencke.com/pixelblaze) is an advanced WiFi LED pattern engine, created by [ElectroMage](https://electromage.com). Live pattern expression compiler, lightning fast fixed point math, and HDR!

Fibonacci boards are laid out physically in a zig-zag pattern, from center to edge and back to center, all the way around the board. This layout automatically makes one dimensional patterns designed for strips visually interesting.

To treat the board as a matrix, you can use a pixel map. A 2D XY map can allow you to scroll colors, palettes, and patterns across the panel horizontally, vertically, diagonally, etc.

This map can be copied and pasted into the Pixel Mapper in the Mapper tab of your Pixelblaze web interface.

<div class="accordion" id="accordion">

  <div class="accordion-item">
    <h4 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Pixelblaze XY Map (click to expand)</button></h4>
    <div id="collapseOne" class="accordion-collapse collapse" data-parent="#accordion" aria-labelledby="headingOne">
      <div class="accordion-body">
        <pre>
[[140,128],[189,114],[208,91],[214,63],[208,34],[146,0],[168,21],[180,48],[180,76],[162,106],[152,78],[146,47],[129,25],[103,11],[72,5],[40,38],[70,35],[97,42],[120,61],[131,101],[107,87],[79,69],[50,68],[23,78],[0,98],[7,143],[23,118],[46,102],[76,98],[93,122],[57,131],[37,152],[28,179],[29,209],[87,255],[68,230],[59,202],[62,174],[80,148],[113,142],[91,181],[94,210],[109,235],[133,252],[202,235],[172,234],[145,224],[125,203],[117,170],[145,183],[170,201],[198,205],[227,198],[253,181],[255,134],[235,157],[210,171],[181,173],[148,153],[175,145],[207,138],[228,120],[240,93],[244,63]]
        </pre>
      </div>
    </div>
  </div>

</div>

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

**Note**: Pictures are of the larger [Fibonacci256](/fibonacci256), but the instructions are identical.

1. Find a clean spot on your soldering workspace. I used a piece of heavy card stock. Carefully place the board with the LEDs facing down and the bottom of the board facing up.
   <img src="/assets/dcH2g2E.jpg" class="img-fluid post-img" />
2. I used [90 degree header pins](https://amzn.to/2Vzi2gU) to allow connecting and disconnecting jumper wires easily. I used small [female headers](https://amzn.to/2Vzi2gU) to keep them level while I soldered.
   <img src="/assets/oF0O5u5.jpg" class="img-fluid post-img" />
3. Insert the header pins.
   <img src="/assets/SDp87ah.jpg" class="img-fluid post-img" />
4. Carefully turn the board over and solder only the middle pin of each header.
   <img src="/assets/YafBoqC.jpg" class="img-fluid post-img" />
5. Ensure the headers are straight and level before proceeding to solder the remaining pins. The 5V and GND pins are connected to planes with large traces, and may take some time to heat up enough for solder to melt. Using a higher temperature and less time can help, if possible. Flux can also help.
6. Check each solder joint, then disconnect the female headers.
7. **VERY** carefully check polarity before connecting 5V and GND. If possible, connect 5V and GND on both sets of headers to provide maximum current flow and minimize voltage drop. I used [female jumper wires](https://amzn.to/2vjvZ8e).
   <img src="/assets/XqbL1R8.jpg" class="img-fluid post-img" />
8. Connect the data pin from your microcontroller to the DI pin on the Fibonacci board.
9. Each WS2812 can theoretically draw 60mA at full brightness, solid white color. 64 of them can theoretically draw 4 Amps! I strongly suggest using [FastLED's power management](https://github.com/FastLED/FastLED/wiki/Power-notes#managing-power-in-fastled) to limit the maximum brightness to a reasonable amount, well under the maximum your power supply is rated for. I've found even just 2A from a USB power adapter is blindingly bright.
10. Keep an eye on the temperature of the PCB and especially the connectors. High temperatures can reduce the life of the LEDs. When possible, ensure air can flow, either passively (ventilation) or actively (exhaust fan).
11. Most header pins are rated for 4-6 amps, but be sure to check your pins and wires. High temperatures increase resistance, which increases temperature, ad infinitum. If temperatures exceed the maximum rating of the wire insulation, sparks and fire can occur at high amperage.
