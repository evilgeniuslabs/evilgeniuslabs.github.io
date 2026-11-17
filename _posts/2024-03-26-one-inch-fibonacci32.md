---
layout: post
title: One Inch Fibonacci32
id: oneInchFibonacci32
imgurId: frgLUoK.mp4
excerpt: One Inch Fibonacci 32 is a tiny, beautiful 25.4mm circular disc with 32 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a miniature galaxy, it's mesmerizing to watch.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /70
  - /1f32
  - /1inchf32
sortKey: Fibonacci0032 One Inch
lectronz: inch-fibonacci32
gallery:
  - src: "/assets/p1h802V.jpg"
    alt: "One Inch Fibonacci32 glowing purple, held in fingers next to a US dime and a pencil for scale"
  - src: "/assets/TMCIxrg.jpg"
    alt: "One Inch Fibonacci32 glowing red, next to a dime and a pencil"
  - src: "/assets/0rUoHHm.jpg"
    alt: "One Inch Fibonacci32 glowing red and blue, next to a dime and a pencil"
  - src: "/assets/A4Mp9aR.jpg"
    alt: "Unlit One Inch Fibonacci32 PCB showing its 32 LEDs"
  - src: "/assets/VX8u6vM.jpg"
    alt: "Back of the One Inch Fibonacci32 PCB with pads for DI, ground and 5V and a QT Py footprint"
---

<h2>Table of Contents</h2>

- TOC
{:toc}

## Details

One Inch Fibonacci 32 is a tiny, beautiful 25.4mm circular disc with 32 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a miniature galaxy, it's mesmerizing to watch.

It consists of 32 SK6805-1515 1.5mm² RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

It has solder pads on the back that match the pinout of the [QT Py by Adafruit](https://www.adafruit.com/?q=qt+py), or [XIAO by Seeed](https://www.seeedstudio.com/catalogsearch/result/?q=xiao). It can be used by any microcontroller via the 5V, GND, and Data In pins. It also has a Data Out pad, for connecting more LEDs on the same data pin.

The three mounting holes are surrounded by capacitive touch compatible pads. They're connected to the A0-A2 pads/pins on the QT Py footprint. The SAMD21 QT Py supports capacitive touch on these pins.

{% include fermat-spiral.html %}

---

## Specifications

- Size: 1.0 x 1.0 x .063 inch (25.4 x 25.4 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black or Purple SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) or ENIG (electroless nickel immersion gold) Finish
- Designed in the US by Evil Genius Labs
- Some PCBs are manufactured in the US by [OSH Park](https://oshpark.com)
- Some are assembled in the US by Evil Genius Labs

## Code

Open source touch demo: [https://github.com/jasoncoon/fibonacci32-one-inch](https://github.com/jasoncoon/fibonacci32-one-inch)

## Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

<img alt="Back of the One Inch Fibonacci32 with a QT Py microcontroller and USB-C port soldered on" src="/assets/DqfN3na.jpg" class="img-fluid post-img" />

1. Find a clean spot on your soldering workspace. I used a piece of heavy card stock. Carefully place the board with the LEDs facing down and the bottom of the board facing up.
1. **VERY** carefully check polarity before connecting 5V and GND.
1. Either:

- Solder wires to the pads on the back of the Fibonacci PCB and connect them to your microcontroller.
- Or:
- Carefully align an Adafruit QT Py, Seeeduino XIAO, or another controller with an identical footprint with the pads on the back of the Fibonacci PCB. Solder the pads.

1. Each SK6805-1515 can theoretically draw 15mA at full brightness, solid white color. 32 of them can theoretically draw 480mA. I've found tha is blindingly bright, and brightness should be drastically reduced to keep current draw and heat down.
1. Keep an eye on the temperature of the PCB and especially the connectors. High temperatures can reduce the life of the LEDs. When possible, ensure air can flow, either passively (ventilation) or actively (exhaust fan).
1. If using FastLED, I suggest using its [power management](https://github.com/FastLED/FastLED/wiki/Power-notes#managing-power-in-fastled) to limit the maximum brightness to a reasonable amount, well under the maximum your power supply is rated for.

## Case Assembly Instructions

### 3D printed front

Use M2x4mm screws, inserted from the back, threaded through the back cover, through the LED PCB, and into the front.

### Acrylic with screws in front

1. Insert M2x10mm Button Head Hex Screws into the holes in the matte side of the acrylic face plate.
1. Carefully center and place the Fibonacci PCB onto the screws, with the LED side facing the glossy side of the acrylic face plate.
1. Center and place the back plate onto the screws. The back plate should fit flush against the back of the PCB.
1. Hand-tighten M2 Hex Nuts onto the screws.
